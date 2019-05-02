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
end
