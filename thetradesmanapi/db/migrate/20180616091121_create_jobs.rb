class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :description
      t.string :timestamps
      t.string :status, default: 'open' #'open', 'inprogress', 'completed'
      t.timestamps
    end
  end
end
