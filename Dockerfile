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
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Copy the Gemfile first to leverage Docker's layer caching.
# If Gemfile doesn't change, this layer won't be rebuilt.
COPY Gemfile ./

# Install gems using Bundler
RUN bundle install --jobs=$(nproc) --retry=3 --no-cache

# Copy the rest of your application's code into the container
COPY . . 
