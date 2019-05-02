class CreateWords < ActiveRecord::Migration[5.2]
  def change
    create_table :words do |t|
      t.string :german
      t.string :level
      t.string :category

      t.timestamps
    end
  end
end
