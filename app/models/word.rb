class Word < ApplicationRecord
  # german: string
  # level: string
  # category: string

  has_many :translations

  def self.search(search)
  	Word.where('german LIKE ?', "%#{search}%")
  end
end
