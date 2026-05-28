# NOTE: It is recommended to delete this file and use the uppercase 'Dockerfile' instead.
# Use a Ruby version compatible with the github-pages gem.
# As of mid-2024, Ruby 3.1 is a safe bet for GitHub Pages compatibility.
FROM ruby:3.1

# Set locale to prevent encoding errors
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

# Set the working directory in the container
WORKDIR /usr/src/app

# Install prerequisites for adding new repositories, then install Node.js v20
RUN apt-get update -qq && apt-get install -y build-essential curl gpg
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
RUN apt-get install -y nodejs

# Copy Gemfile and Gemfile.lock to leverage Docker's layer caching.
COPY Gemfile* ./

# Ensure the lockfile includes the Linux platform needed for the container environment.
RUN bundle lock --add-platform aarch64-linux || true

RUN bundle install --jobs=$(nproc) --retry=3

# Copy the rest of your application's code into the container
COPY . . 
