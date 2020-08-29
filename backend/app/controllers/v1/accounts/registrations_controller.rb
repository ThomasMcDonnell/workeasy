class V1::Accounts::RegistrationsController < ApplicationController
  def create
    Rails.logger.tagged("accounts") do
      new_registration_params = registration_params

      @organization = Organization.new(new_registration_params)

      if @organization.valid?
        @organization.save!
        @organization.owner.send_confirmation_instructions
        render json: {message: "Your account has been created. We've sent a confirmation email to the email address you signed up with."}, status: :created
      else
        Rails.logger.error "errors: #{@organization.errors.full_messages.to_sentence}"
        render json: {message: @organization.errors.full_messages.to_sentence}, status: :unprocessable_entity
      end
    end
  end

  private

  def registration_params
    permitted_attrs = [
      :name,
      owner_attributes: [
        :name,
        :email,
        :password
      ]
    ]
    params.require(:organization).permit(*permitted_attrs)
  end
end
