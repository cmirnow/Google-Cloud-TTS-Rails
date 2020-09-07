class AddConfirmableToAdmin < ActiveRecord::Migration[5.2]
  def change
    change_table(:admins) do |t|
       # Confirmable
       t.string   :confirmation_token
       t.datetime :confirmed_at
       t.datetime :confirmation_sent_at
       t.string   :unconfirmed_email # Only if using reconfirmable
     end
     add_index  :admins, :confirmation_token, :unique => true 
   end
end
