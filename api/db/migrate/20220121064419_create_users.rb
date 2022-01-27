# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :nickname, null: false
      t.string :email, null: false
      t.string :avatar_url, null: false
      t.string :uid, null: false
      t.virtual :lower_email, type: :string, as: 'LOWER(email)', stored: true

      t.timestamps
    end

    add_index :users, :lower_email, unique: true
  end
end
