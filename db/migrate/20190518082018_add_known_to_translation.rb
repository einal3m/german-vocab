class AddKnownToTranslation < ActiveRecord::Migration[5.2]
  def change
    add_column :translations, :known, :boolean
    remove_column :translations, :learnt, :boolean
  end
end
