class AddUniqueIndexToProgress < ActiveRecord::Migration[5.2]
  def change
    add_index :progresses, [:user_id, :word_id], unique: true
  end
end
