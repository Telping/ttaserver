class AddJobOwnerToJob < ActiveRecord::Migration[5.2]
  def change
    add_reference :jobs, :job_owner, index: true
  end
end
