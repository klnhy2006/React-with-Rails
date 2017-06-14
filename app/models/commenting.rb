class Commenting < ApplicationRecord
  belongs_to :item
  has_many :replies, dependent: :destroy
end
