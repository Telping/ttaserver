class AddCscsCardNumberToJobSeeker < ActiveRecord::Migration[5.2]
  def change
    add_column :job_seekers, :cscs_card_number, :string
  end
end
