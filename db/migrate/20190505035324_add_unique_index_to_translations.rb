class AddUniqueIndexToTranslations < ActiveRecord::Migration[5.2]
  def change
    add_index :translations, [:user_id, :word_id], unique: true
  end
end
