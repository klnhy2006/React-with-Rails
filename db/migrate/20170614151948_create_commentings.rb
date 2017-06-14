class CreateCommentings < ActiveRecord::Migration[5.1]
  def change
    create_table :commentings do |t|
      t.string :name
      t.text :content
      t.references :item, foreign_key: true

      t.timestamps
    end
  end
end
