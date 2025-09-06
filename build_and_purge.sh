#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "--- Building Docker image with Jekyll and Node.js environments ---"

# Build the Docker image from the Dockerfile. We'll name it 'jekyll-builder'.
# The new Dockerfile includes Node.js and npm.
docker build -t jekyll-builder .

echo ""
echo "--- Running build process inside Docker container ---"
# Run the entire build and purge process inside the container.
# This makes the build self-contained and portable.
# The first volume mount `-v "$(pwd)":/usr/src/app` maps your project files.
# The second volume mount `-v /usr/src/app/node_modules` creates a data volume
# for node_modules. This prevents the first mount from hiding the node_modules
# directory that was installed when the image was built, making `postcss` available.
docker run --rm -v "$(pwd)":/usr/src/app -v /usr/src/app/node_modules jekyll-builder sh -c '
    set -e
    echo "--- Building Jekyll site ---"
    bundle exec jekyll build
    echo ""
    echo "--- Running PurgeCSS to remove unused styles ---"
    npm run purge
    echo ""
    echo "--- Build and purge complete. Your optimized site is ready in the _site directory. ---"
'

echo ""
echo "--- Replacing source assets with optimized assets from _site ---"

# Remove the old assets directory. This is a destructive action, but it's
# necessary to ensure we're using the newly optimized files.
rm -rf assets

# Move the new, optimized assets from the build output to the project root.
mv _site/assets .

echo ""
echo "--- Cleaning up remaining build artifacts ---"

# Remove the now-empty _site directory.
rm -rf _site

echo ""
echo "--- Done! Your optimized assets are now in the 'assets' directory and ready to be committed. ---"
