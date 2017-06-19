class Api::V1::SessionsController < Api::V1::BaseController 
	
	def create
		@user = User.find_by(name: params[:name])
		if @user && @user.authenticate(params[:password])
			log_in @user
			puts 'in session create'
			redirect_to "/api/v1/users/"+@user.id.to_s
		else
		  flash.now[:danger] = 'Invalid email/password combination'
		end
	end
end