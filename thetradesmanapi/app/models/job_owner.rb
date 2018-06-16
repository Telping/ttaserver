class JobOwner < ApplicationRecord
  belongs_to :user
  has_many :jobs
  has_many :locations
end
