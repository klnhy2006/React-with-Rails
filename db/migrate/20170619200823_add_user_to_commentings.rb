class AddUserToCommentings < ActiveRecord::Migration[5.1]
  def change
	add_column :commentings, :user_name, :string
  end
end
