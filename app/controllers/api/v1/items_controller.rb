class Api::V1::ItemsController < Api::V1::BaseController 
	def index 
		respond_with Item.all 
	end 

	def create 
		@item = Item.create(item_params)
		respond_with :api, :v1, @item 
	end 

	def destroy 
		respond_with Item.destroy(params[:id]) 
	end 

	def update 
		item = Item.find(params["id"]) 
		item.update_attributes(item_params) 
		respond_with item, json: item 
	end 

	private 

	def item_params 
		params.require(:item).permit(:id, :name, :description, :user_id, :user_name) 
	end 

end