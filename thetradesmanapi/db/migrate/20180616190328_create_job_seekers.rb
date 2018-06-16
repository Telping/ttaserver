class CreateJobSeekers < ActiveRecord::Migration[5.2]
  def change
    create_table :job_seekers do |t|
      t.string :first_name, null: false, default: ""
      t.string :last_name, null: false, default: ""
      t.string :contact_phone
      t.string :post_code
      t.string :address_line1
      t.string :address_line2
      t.float :star_rating
      t.text :about
      t.boolean :driving_license
      t.float :half_day_rate 
      t.float :full_day_rate
      t.float :hourly_rate 
      t.string :user_type, default: 'tradesman' #employer, tradesman
      t.references :user
      t.timestamps
    end
  end
end
