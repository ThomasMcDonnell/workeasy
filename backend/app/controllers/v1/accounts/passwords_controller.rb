class V1::Accounts::PasswordsController < ApplicationController
  def forgot
    forgot_params = valid_params

    if (user = User.find_by(email: forgot_params[:email]))
      render json: {message: "If this user exists, we have sent you a password reset email."}, status: :ok
      user.send_reset_password_instructions
    else
      render json: {message: "This account is not registerd with workeasy."}, status: :not_found
    end
  end

  def reset
    reset_params = valid_params
    user = User.find_by(password_reset_token: reset_params[:token], email: reset_params[:email])

    if user&.password_token_valid?
      if user.reset_password(reset_params[:password])
        render json: {message: "Your password has been successfuly reset!"}
      else
        render json: {error: user.errors.full_messages}, status: :unprocessable_entity
      end
    else
      render json: {error: ["Link not valid or expired. Try generating a new link."]}, status: :not_found
    end
  end

  private

  def valid_params
    permitted_attrs = %i[
      email
      password
      password_reset_token
    ]
    params.require(:user).permit(*permitted_attrs)
  end
end
