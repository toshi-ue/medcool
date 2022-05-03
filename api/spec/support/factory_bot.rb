# frozen_string_literal: true

require 'factory_bot'

RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
  # doc: https://qiita.com/naoki_mochizuki/items/1d3026a32786642fc762#factory_bot
  #   springが原因でfactoryが正しく読み込まれないことを防ぐ
  # config.before :all do
  #   FactoryBot.reload
  # end
end
