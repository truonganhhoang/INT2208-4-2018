class CreateCardSets < ActiveRecord::Migration[5.2]
  def change
    create_table :card_sets do |t|
      t.string :avatar_url
      t.string :title
      t.text :description
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
