class CreateProgresses < ActiveRecord::Migration[5.2]
  def change
    create_table :progresses do |t|
      t.references :user
      t.references :word
      t.boolean :seen
      t.boolean :translation
      t.text :example
      t.integer :count
      t.boolean :learnt

      t.timestamps
    end
  end
end
