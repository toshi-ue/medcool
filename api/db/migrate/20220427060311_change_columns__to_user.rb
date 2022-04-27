class ChangeColumnsToUser < ActiveRecord::Migration[7.0]
  def up
    change_column :users, :avatar_url, :string, null: true
    change_column :users, :nickname, :string, null: true
  end

  def down
    change_column :users, :avatar_url, :string, null: false
    change_column :users, :nickname, :string, null: false
  end
end
