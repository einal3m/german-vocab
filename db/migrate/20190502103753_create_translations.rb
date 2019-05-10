class CreateTranslations < ActiveRecord::Migration[5.2]
  def change
    create_table :translations do |t|
      t.references :user
      t.references :word
      t.boolean :seen
      t.string :translation
      t.text :example
      t.integer :count
      t.boolean :learnt

      t.timestamps
    end
  end
end
