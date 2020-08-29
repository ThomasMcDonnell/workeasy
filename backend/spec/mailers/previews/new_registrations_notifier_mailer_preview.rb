# Preview all emails at http://localhost:3000/rails/mailers/new_registrations_notifier_mailer
class NewRegistrationsNotifierMailerPreview < ActionMailer::Preview
  def notification
    user = User.new(
      name: "test",
      email: "test@test.com",
      confirmation_token: SecureRandom.urlsafe_base64
    )

    NewRegistrationsNotifierMailer.notification(user)
  end
end
