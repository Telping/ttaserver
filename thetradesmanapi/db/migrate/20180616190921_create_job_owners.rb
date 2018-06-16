class CreateJobOwners < ActiveRecord::Migration[5.2]
  def change
    create_table :job_owners do |t|
      t.string :organization, null: false, default: ""
      t.string :contact_first_name, null: false, default: "" 
      t.string :contact_last_name, null: false, default: ""
      t.string :contact_email 
      t.string :contact_role, :string 
      t.string :contact_number, :string, null: false, default: ""
      t.float :star_rating
      t.text :about
      t.references :user
      t.timestamps
    end
    
  end
end
