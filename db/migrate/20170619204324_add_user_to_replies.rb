class AddUserToReplies < ActiveRecord::Migration[5.1]
  def change
	add_column :replies, :user_name, :string
  end
end
