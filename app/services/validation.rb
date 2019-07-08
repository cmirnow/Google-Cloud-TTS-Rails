class Validation
	include ActiveModel::Model
	attr_accessor :request
	validates :request, presence: true, length: {in:3..4999}
end
