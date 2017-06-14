class Item < ApplicationRecord
	has_many :commentings , dependent: :destroy
end
