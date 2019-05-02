class Word < ApplicationRecord
  # german: string
  # level: string
  # category: string

  has_many :progresses

  def self.search(search)
  	Word.where('german LIKE ?', "%#{search}%")
  end
end
