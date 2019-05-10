class Review < ApplicationRecord
  # translation: foreign key
  # correct: boolean

  belongs_to :translation
end
