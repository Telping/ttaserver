class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.references :job_owner
      t.string :name 
      t.string :address_line1
      t.string :address_line2
      t.string :post_code 
      t.string :county 
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
    add_reference :jobs, :location, index: true
  end
end
