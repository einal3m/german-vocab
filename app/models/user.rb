class User < ApplicationRecord
  # name: string

  has_many :progresses
end
