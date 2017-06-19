class AddUserInfoToItems < ActiveRecord::Migration[5.1]
  def change
	add_column :items, :user_id, :integer
	add_column :items, :user_name, :string
  end
end
