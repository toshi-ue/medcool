# frozen_string_literal: true

require 'vcr'
require 'webmock/rspec'

# doc:
#   https://github.com/vcr/vcr#usage
#   https://morizyun.github.io/blog/webmock-vcr-gem-rails/
#   https://qiita.com/naoki_mochizuki/items/1d3026a32786642fc762#vcr
VCR.configure do |config|
  config.cassette_library_dir = 'spec/vcr' # or "#{ ::Rails.root }/spec/cassettes"
  config.hook_into :webmock
  config.allow_http_connections_when_no_cassette = false
  # config.ignore_localhost = true
  # config.configure_rspec_metadata!
end
