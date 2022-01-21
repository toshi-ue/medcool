# frozen_string_literal: true

class RemoveColumnLowerEmailFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_index :users, :lower_email
    remove_column :users, :lower_email, :virtual
  end
end
