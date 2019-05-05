require 'rails_helper'

RSpec.describe Progress, type: :model do
  describe 'validations' do
    it 'is invalid if there is already a progress for a specific user and word'do
      word = Word.create(german: 'eins')
      user = User.create(name: 'me')
      progress = Progress.create(user: user, word: word, seen: true)

      duplicate_progress = Progress.new(user: user, word: word, seen: false)
      expect(duplicate_progress.valid?).to be_falsey
    end
  end

  describe '.search' do
    it 'returns progress that matches' do
      word = Word.create(german: 'eins')
      other_word = Word.create(german: 'zwei')
      user = User.create(name: 'me')
      progress = Progress.create(user: user, word: word, seen: true)
      Progress.create(user: user, word: other_word, seen: false)

      result = Progress.search(word.id, user.id)
      expect(result).to eq([progress])
    end
  end
end
