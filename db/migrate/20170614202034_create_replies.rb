class CreateReplies < ActiveRecord::Migration[5.1]
  def change
    create_table :replies do |t|
      t.string :name
      t.text :description
      t.references :commenting, foreign_key: true

      t.timestamps
    end
  end
end
