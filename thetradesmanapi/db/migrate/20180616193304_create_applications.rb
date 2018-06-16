class CreateApplications < ActiveRecord::Migration[5.2]
  def change
    create_table :applications do |t|
      t.references :job
      t.references :job_seeker
      t.boolean :accepted
      t.timestamps
    end
  end
end
