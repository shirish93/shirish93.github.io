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
    """Gets a list of staged markdown files that are being committed."""
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

    today = datetime.now().strftime('%Y-%m-%d')
    updated = False

    for filepath in staged_files:
        if os.path.exists(filepath):
            try:
                post = frontmatter.load(filepath)
                # Update modification date to today
                post['last_modified_at'] = today
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(frontmatter.dumps(post))
                
                # Re-stage the modified file so the change is included in the commit
                subprocess.run(['git', 'add', filepath], check=True)
                updated = True
            except Exception as e:
                print(f"Error updating modification date for {filepath}: {e}")

    if updated:
        print("Updated last_modified_at for staged markdown files.")

if __name__ == '__main__':
    main()