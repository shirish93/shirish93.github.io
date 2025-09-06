#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "--- Building Docker image for development server ---"

# Build the Docker image from the Dockerfile.
docker build -t jekyll-builder .

echo ""
echo "--- Starting Jekyll development server inside Docker container ---"
echo "--- Your site will be available at http://localhost:4000 ---"
echo "--- Press CTRL+C to stop the server. ---"

# Run the container to serve the site.
# -p 4000:4000: Maps port 4000 on your local machine to port 4000 in the container.
# --rm: Automatically removes the container when it exits.
# -v mounts: Mount your local project directory for live-reloading.
# The command `bundle exec jekyll serve --host 0.0.0.0` starts the server, watches
# for file changes, and makes it accessible from outside the container.
docker run --rm \
    -p 4000:4000 \
    -v "$(pwd)":/usr/src/app \
    -v /usr/src/app/node_modules \
    jekyll-builder bundle exec jekyll serve --host 0.0.0.0
