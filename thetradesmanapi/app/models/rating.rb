class Rating < ApplicationRecord
  belongs_to :job_seeker
  belongs_to :job_owner
end
