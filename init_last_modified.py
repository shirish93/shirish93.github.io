# /// script
# requires-python = ">=3.13.6"
# dependencies = [
#   "python-frontmatter>=1.1.0",
# ]
# ///

import os
import subprocess
import frontmatter
from datetime import datetime

def get_git_creation_date(filepath):
    """Retrieves the date of the earliest commit for a file using git log."""
    try:
        result = subprocess.run(
            ['git', 'log', '--reverse', '--format=%ad', '--date=short', '--', filepath],
            capture_output=True, text=True, check=True, timeout=5
        )
        lines = result.stdout.strip().split('\n')
        if lines and lines[0]:
            return lines[0]
    except Exception:
        pass
    return datetime.now().strftime('%Y-%m-%d')

def main():
    for root, _, files in os.walk('.'):
        # Skip system, build, and dependency folders
        if any(skip in root for skip in ['.git', 'vendor', '_site', 'node_modules']):
            continue
            
        for file in files:
            if file.endswith(('.md', '.markdown')):
                filepath = os.path.join(root, file)
                try:
                    post = frontmatter.load(filepath)
                    
                    # Only populate if it doesn't already have it
                    if 'last_modified_at' not in post:
                        creation_date = get_git_creation_date(filepath)
                        post['last_modified_at'] = creation_date
                        
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(frontmatter.dumps(post))
                        print(f"Initialized: {filepath} -> {creation_date}")
                except Exception as e:
                    print(f"Skipped {filepath}: {e}")

if __name__ == '__main__':
    main()