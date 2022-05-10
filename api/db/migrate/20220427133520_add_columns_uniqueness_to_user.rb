# frozen_string_literal: true

class AddColumnsUniquenessToUser < ActiveRecord::Migration[7.0]
  def up
    add_index :users, :email, unique: true
    add_index :users, :uid, unique: true
  end

  def down
    remove_index :users, :email, unique: true
    remove_index :users, :uid, unique: true
  end
end
