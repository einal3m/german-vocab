class UsersController < ApplicationController

  def index
     render :index, layout: 'elm'
  end


  def new
    @user = User.new

    render :new, layout: 'elm'
  end
end
