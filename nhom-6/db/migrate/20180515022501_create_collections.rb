class CreateCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.integer :title
      t.references :card_set, foreign_key: true

      t.timestamps
    end
  end
end
