# /// script
# requires-python = ">=3.13.6"
# dependencies = [
#   "python-frontmatter>=1.1.0",
# ]
# ///

import os
import re
import subprocess
import frontmatter
from datetime import datetime

# Regex to check for a full YYYY-MM-DD HH:MM:SS timestamp
TIMESTAMP_REGEX = re.compile(r'^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$')

def get_git_creation_timestamp(filepath):
    """Retrieves the full timestamp of the earliest commit for a file using git log."""
    try:
        result = subprocess.run(
            ['git', 'log', '--reverse', '--format=%ad', '--date=format:%Y-%m-%d %H:%M:%S', '--', filepath],
            capture_output=True, text=True, check=True, timeout=5
        )
        lines = result.stdout.strip().split('\n')
        if lines and lines[0]:
            return lines[0]
    except Exception:
        pass
    # Fallback if file isn't tracked in git yet
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S')

def main():
    updated_count = 0
    for root, _, files in os.walk('.'):
        # Skip system, build, and dependency folders
        if any(skip in root for skip in ['.git', 'vendor', '_site', 'node_modules']):
            continue
            
        for file in files:
            if file.endswith(('.md', '.markdown')):
                filepath = os.path.join(root, file)
                try:
                    post = frontmatter.load(filepath)
                    last_mod = str(post.get('last_modified_at', ''))
                    
                    # If it's missing or doesn't have a full timestamp format
                    if not TIMESTAMP_REGEX.match(last_mod):
                        creation_timestamp = get_git_creation_timestamp(filepath)
                        post['last_modified_at'] = creation_timestamp
                        
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(frontmatter.dumps(post))
                            
                        print(f"Reset: {filepath} -> {creation_timestamp} (was: '{last_mod}')")
                        updated_count += 1
                except Exception as e:
                    print(f"Skipped {filepath}: {e}")
                    
    print(f"\nDone! Updated {updated_count} files to their creation timestamps.")

if __name__ == '__main__':
    main()