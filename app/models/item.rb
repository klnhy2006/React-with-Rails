class Item < ApplicationRecord
	has_many :commentings , dependent: :destroy
	has_many :replies, through: :commentings, dependent: :destroy
end
