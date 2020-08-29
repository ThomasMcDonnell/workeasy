require "rails_helper"

RSpec.describe "V1::Accounts::Registrations", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/v1/accounts/registrations/create"
      expect(response).to have_http_status(:success)
    end
  end
end
