class AddItemtoComments < ActiveRecord::Migration[5.1]
  def change
	add_reference :comments, :item, index: true
  end
end
