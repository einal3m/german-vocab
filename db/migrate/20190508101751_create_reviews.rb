class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.boolean :correct
      t.references :translation, foreign_key: true

      t.timestamps
    end
  end
end
