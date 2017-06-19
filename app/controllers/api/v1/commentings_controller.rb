class Api::V1::CommentingsController < Api::V1::BaseController 
	def index
		@item = Item.find(params[:item_id])
		respond_with @item.commentings
	end

	def create
		@item = Item.find(params[:item_id])
		respond_with :api, :v1, @item, @item.commentings.create(comment_params) 
	end 

	def destroy 
		@item = Item.find(params[:item_id])
		respond_with @item.commentings.destroy(params[:id]) 
	end 

	private 

	def comment_params 
		params.require(:comment).permit(:id, :name, :content, :user_name) 
	end 

end