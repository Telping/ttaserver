Apipie.configure do |config|
  config.app_name                = "The Tradesman App API"

  config.api_base_url            = ""
  config.doc_base_url            = "/apidocs"
  config.translate = false
  config.validate = false
  # where is your API defined?
  config.api_controllers_matcher = "#{Rails.root}/app/controllers/api/v1/{**/*,*}.rb"
  config.authenticate = Proc.new do
    authenticate_user!
  end

  config.app_info                = '----------'

end