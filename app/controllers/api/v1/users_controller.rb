class Api::V1::UsersController < Api::V1::BaseController 
	def index
		respond_with User.all
	end
	
	def show
		@user = User.find_by(id: params[:id])
		respond_with @user
	end

	def create 
		@user = User.new(user_params) 
		if @user.save
			log_in @user
			redirect_to "/api/v1/users/"+@user.id.to_s
		else
			return render json: {status: 'error', message: 'User not created'}
		end 
	end

	# def destroy 
		# respond_with Item.destroy(params[:id]) 
	# end 

	# def update 
		# item = Item.find(params["id"]) 
		# item.update_attributes(item_params) 
		# respond_with item, json: item 
	# end 

	private 

		def user_params 
			params.require(:user).permit(:id, :name, :password, :password_confirmation) 
		end 

end