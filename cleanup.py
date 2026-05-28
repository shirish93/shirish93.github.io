import re
from pathlib import Path

# Set the root directory to wherever the script is running
root_dir = Path('.')
assets_dir = root_dir / 'assets'

# Regex to find anything ending in .png (e.g., assets/images/eco-nepal.png)
png_pattern = re.compile(r'([\w\-./]+\.png)')

used_images = set()

# 1. Scan all markdown files to build a list of USED filenames
for md_file in root_dir.rglob('*.md'):
    try:
        content = md_file.read_text(encoding='utf-8', errors='ignore')
        matches = png_pattern.findall(content)
        for match in matches:
            # We only want the filename ('eco-nepal.png'), not the full path
            used_images.add(Path(match).name)
    except Exception as e:
        print(f"Could not read {md_file}: {e}")

# 2. Scan the assets directory to find UNUSED png files
used_files = []
for png_file in assets_dir.rglob('*.png'):
    if png_file.name in used_images:
        used_files.append(png_file)
        print(png_file.name)

# 3. Report and execute
print(f"Found {len(used_files)} unused PNG files.\n")



if len(used_files) > 0:
    print("\nDry run complete. To actually delete the files, uncomment `file.unlink()` in the script.")
else:
    print("Your assets folder is totally clean!")