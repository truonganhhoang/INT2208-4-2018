class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :avatar_url
      t.string :title
      t.text :description
      t.references :collection, foreign_key: true

      t.timestamps
    end
  end
end
