# Preview all emails at http://localhost:3000/rails/mailers/reset_password_notifier
class ResetPasswordNotifierMailerPreview < ActionMailer::Preview
  def notification
    user = User.new(
      name: "test",
      email: "test@test.com",
      reset_password_token: SecureRandom.urlsafe_base64
    )

    ResetPasswordNotifierMailer.notification(user)
  end
end
