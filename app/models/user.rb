class User < ApplicationRecord
  # name: string

  has_many :translations
end
