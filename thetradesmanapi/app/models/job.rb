class Job < ApplicationRecord
  enum status: { open: 'open', inprogress: 'inprogress', completed:'completed' }
  validates :title, presence: true
  validates :description, presence: true
end
