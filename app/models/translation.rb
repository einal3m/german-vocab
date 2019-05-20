class Translation < ApplicationRecord
  # user: foreign key
  # word: foreign key
  # translation: string
  # example: text
  # known: boolean

  belongs_to :user
  belongs_to :word
  has_many :reviews

  MIN_LEVEL = 0
  MAX_LEVEL = 5

  validates :user_id, uniqueness: { scope: :word_id, message: "should only have one translation per word" }

  def self.search(word_id, user_id)
  	Translation.where(word_id: word_id, user_id: user_id)
  end

  def level
    return MAX_LEVEL if known

    level = MIN_LEVEL
    reviews.each do |review|
      if review.correct
        level += 1 unless level == MAX_LEVEL
      else
        level -= 1 unless level == MIN_LEVEL
      end
    end
    level
  end

  def last_review
    reviews.last&.created_at
  end

  def review_count
    reviews.count
  end

  def learnt
    known || (level == MAX_LEVEL)
  end
end
