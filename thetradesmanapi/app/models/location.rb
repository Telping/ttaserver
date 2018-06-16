class Location < ApplicationRecord
  belongs_to :job_owner
  has_many :jobs
end
