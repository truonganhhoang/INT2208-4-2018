class CardSet < ApplicationRecord
  belongs_to :category
  has_many :collections
end
