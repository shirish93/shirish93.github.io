source 'https://rubygems.org'

# Use the 'github-pages' gem to mimic the GitHub Pages build environment.
# This gem will install the correct versions of Jekyll and all supported plugins,
# including 'kramdown-parser-gfm', ensuring a consistent build.
gem 'github-pages', group: :jekyll_plugins

group :jekyll_plugins do
    gem 'jekyll-feed'
    gem 'jekyll-sitemap'
    gem 'jekyll-paginate'
    gem 'jekyll-seo-tag'
    gem 'jekyll-archives'
    gem "kramdown", ">= 2.3.1"
    gem 'rouge'
end

# Add webrick for 'jekyll serve' command compatibility with Ruby 3.0+
# This was likely in your old Gemfile, judging by Gemfile.lock
gem 'webrick'
