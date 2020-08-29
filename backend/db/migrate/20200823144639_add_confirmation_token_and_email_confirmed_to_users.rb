class AddConfirmationTokenAndEmailConfirmedToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :confirmation_token, :string
    add_column :users, :email_confirmed, :boolean, default: false
  end
end
