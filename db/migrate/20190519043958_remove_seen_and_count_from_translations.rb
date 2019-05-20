class RemoveSeenAndCountFromTranslations < ActiveRecord::Migration[5.2]
  def change
    remove_column :translations, :seen, :boolean
    remove_column :translations, :count, :integer
  end
end
