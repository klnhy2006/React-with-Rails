class Item < ApplicationRecord
	belongs_to :user
	has_many :commentings , dependent: :destroy
	has_many :replies, through: :commentings, dependent: :destroy
end
