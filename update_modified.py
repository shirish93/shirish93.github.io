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

def get_staged_markdown_files():
    """Gets a list of staged markdown files being committed."""
    result = subprocess.run(
        ['git', 'diff', '--cached', '--name-only', '--diff-filter=ACM'],
        capture_output=True, text=True, check=True
    )
    files = [line.strip() for line in result.stdout.split('\n') if line.strip()]
    return [f for f in files if f.endswith(('.md', '.markdown')) and not f.startswith(('vendor/', '_site/'))]

def main():
    staged_files = get_staged_markdown_files()
    if not staged_files:
        return

    # Generate current timestamp with hours, minutes, and seconds
    current_timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    updated = False

    for filepath in staged_files:
        if os.path.exists(filepath):
            try:
                post = frontmatter.load(filepath)
                post['last_modified_at'] = current_timestamp
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(frontmatter.dumps(post))
                
                subprocess.run(['git', 'add', filepath], check=True)
                updated = True
            except Exception as e:
                print(f"Error updating timestamp for {filepath}: {e}")

    if updated:
        print(f"Updated last_modified_at timestamps to {current_timestamp}")

if __name__ == '__main__':
    main()