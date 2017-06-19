class AddIndexToItems < ActiveRecord::Migration[5.1]
  def change
	add_index :items, [:user_id, :created_at]
  end
end
