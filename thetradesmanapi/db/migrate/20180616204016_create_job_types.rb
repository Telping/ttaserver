class CreateJobTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :job_types do |t|
      t.string :description, null: false, default:""
      t.timestamps
    end
    add_reference :jobs, :job_type
  end
end
