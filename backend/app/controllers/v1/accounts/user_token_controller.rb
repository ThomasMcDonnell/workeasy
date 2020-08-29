class V1::Accounts::UserTokenController < Knock::AuthTokenController
  skip_before_action :verify_authenticity_token

  def entity_name
    "User"
  end
end
