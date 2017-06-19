Rails.application.routes.draw do
	root to: 'site#index'
	
	namespace :api do
		namespace :v1 do
			resources :users
			resources :sessions, only: [:create, :destroy]
			resources :items, only: [:index, :create, :destroy, :update] do
				resources :commentings, only: [:index, :create, :destroy] do
					resources :replies, only: [:index, :create, :destroy]
				end
			end
		end
	end
			# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
