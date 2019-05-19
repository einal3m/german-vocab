class AddArticleAndPluralToWord < ActiveRecord::Migration[5.2]
  def change
    add_column :words, :article, :string
    add_column :words, :plural, :string
  end
end
