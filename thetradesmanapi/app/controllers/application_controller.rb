class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception, if: :verify_api
  #before_action :set_paper_trail_whodunnit

  def verify_api
    params[:controller].split('/')[0] != 'devise_token_auth'
  end

  def records_per_page
    params[:per_page] || 50
  end

  #include DeviseTokenAuth::Concerns::SetUserByToken
  include Response
  include ExceptionHandler
  include PagerApi::Pagination::Kaminari
end