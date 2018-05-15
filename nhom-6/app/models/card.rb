class Card < ApplicationRecord
  belongs_to :collection, optional: true
end
