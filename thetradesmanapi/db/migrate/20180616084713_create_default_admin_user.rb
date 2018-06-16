class CreateDefaultAdminUser < ActiveRecord::Migration[5.2]
  def up
    default_user = User.create(email:"admin@thetradesmanapp.co.uk", password:"password")
    default_user.reload
    default_user.tokens = nil
    default_user.save
  end
end
