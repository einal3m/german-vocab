class Review < ApplicationRecord
  # progress: foreign key
  # correct: boolean

  belongs_to :progress
end
