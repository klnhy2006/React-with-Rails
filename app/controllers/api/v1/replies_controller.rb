class Api::V1::RepliesController < Api::V1::BaseController 
	def index
		@commenting = Commenting.find(params[:commenting_id])
		respond_with @commenting.replies
	end

	def create
		@item = Item.find(params[:item_id])
		@commenting = Commenting.find(params[:commenting_id])
		respond_with :api, :v1, @item, @commenting, @commenting.replies.create(reply_params) 
	end 

	def destroy 
		@commenting = Commenting.find(params[:commenting_id])
		respond_with @commenting.replies.destroy(params[:id]) 
	end 

	private 

	def reply_params 
		params.require(:reply).permit(:id, :name, :description, :user_name) 
	end 

end