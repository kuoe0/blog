source 'https://rubygems.org'

require 'json'
require 'open-uri'

online  = 'https://pages.github.com/versions.json'
offline = './gh-pages-versions.json'

begin
  versions = open(online)
rescue
  puts "Cannot connect to Github!"
  versions = open(offline)
end

# Parse JSON format.
versions = JSON.parse(versions.read)

gem 'github-pages', versions['github-pages']
gem 'jekyll-feed'
gem 'jekyll-seo-tag'
gem 'rake'
