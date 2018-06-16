class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.references :job_seeker 
      t.references :job_owner
      t.string :author, null: false, default: ""
      t.float :star_rating,  null: false, default: 3.0
      t.text :review, null: false, default: ""
      t.timestamps
    end
  end
end
