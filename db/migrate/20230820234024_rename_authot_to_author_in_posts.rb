class RenameAuthotToAuthorInPosts < ActiveRecord::Migration[7.0]
  def change
    rename_column :posts, :authot, :author
  end
end
