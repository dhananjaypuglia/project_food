class UserController < ApiController
  def login
     puts params[:username]
  end
end
