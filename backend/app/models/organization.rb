class Organization < ApplicationRecord
  belongs_to :owner, class_name: "User"

  validates :name, presence: true,
                   uniqueness: {case_sensitive: false}

  accepts_nested_attributes_for :owner
end
