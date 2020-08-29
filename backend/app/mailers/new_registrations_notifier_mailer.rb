class NewRegistrationsNotifierMailer < ApplicationMailer
  def notification(user)
    @user_name = user.name
    @user_email = user.email
    @user_confirmation_token = user.confirmation_token

    mail(
      subject: "Welcome to workeasy",
      from: "newregistrations@workeasy.ie",
      to: user.email,
      date: Time.zone.now
    )
  end
end
