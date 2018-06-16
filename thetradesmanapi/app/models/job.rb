class Job < ApplicationRecord
  belongs_to :location
  belongs_to :job_type
  enum status: { open: 'open', inprogress: 'inprogress', completed:'completed' }
  validates :title, presence: true
  validates :description, presence: true
end
