class User < ApplicationRecord
  VAILD_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  has_secure_password validations: false

  validates :name, presence: true
  validates :email, presence: true, length: {maximum: 255},
                    format: {with: VAILD_EMAIL_REGEX},
                    uniqueness: {case_sensitive: false}
  validates :password, presence: true, length: {minimum: 6}, on: :create

  before_save :downcase_email, if: :email_changed?

  class << self
    def digest(string)
      cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                    BCrypt::Engine.cost
      BCrypt::Password.create(string, cost: cost)
    end
  end

  def to_token_payload
    {sub: id, email: email}
  end

  def send_reset_password_instructions
    generate_reset_token!
    ResetPasswordNotifierMailer.notification(self).deliver_later
  end

  def send_confirmation_instructions
    generate_confirmation_token!
    NewRegistrationsNotifierMailer.notification(self).deliver_later
  end

  def reset_password!(password)
    self.reset_password_token = nil
    self.password_digest = User.digest(password)
    save!
  end

  def generate_reset_token!
    self.reset_password_token = generate_base64_token
    self.reset_password_token_sent_at = Time.zone.now
    save!
  end

  def generate_confirmation_token!
    self.confirmation_token = generate_base64_token
    save!
  end

  def password_token_valid?
    (reset_password_token_sent_at + 1.hour) > Time.zone.now
  end

  def account_activated?
    email_confirmed
  end

  def activate_account
    self.email_confirmed = true
    self.confirmation_token = nil
    save!
  end

  private

  def downcase_email
    self.email = email.downcase
  end

  def generate_base64_token
    SecureRandom.urlsafe_base64
  end
end
