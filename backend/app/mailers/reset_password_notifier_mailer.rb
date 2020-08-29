class ResetPasswordNotifierMailer < ApplicationMailer
  def notification(user)
    @user_name = user.name
    @user_email = user.email
    @user_reset_password_token = user.reset_password_token

    mail(
      subject: "Workeasy Password Reset",
      from: "passwordreset@workeasy.ie",
      to: user.email,
      date: Time.zone.now
    )
  end
end
