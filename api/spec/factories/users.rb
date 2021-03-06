# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    sequence(:nickname) { |n| "#{n}_nickname" }
    sequence(:email) { |n| "#{n}user@example.com" }
    sequence(:avatar_url) { |n| "#{n}_url" }
    sequence(:uid) { |n| n.to_s } # rubocop:disable all
  end
end
