class Progress < ApplicationRecord
  # user: foreign key
  # word: foreign key
  # seen: boolean
  # translation: string
  # example: text
  # count: integer
  # learnt: boolean

  belongs_to :user
  belongs_to :word

  def self.search(word_id, user_id)
  	Progress.where(word_id: word_id, user_id: user_id)
  end
end
