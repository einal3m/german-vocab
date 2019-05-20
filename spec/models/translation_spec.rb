require 'rails_helper'

RSpec.describe Translation, type: :model do
  describe 'validations' do
    it 'is invalid if there is already a translation for a specific user and word'do
      word = Word.create(german: 'eins')
      user = User.create(name: 'me')
      translation = Translation.create(user: user, word: word)

      duplicate_translation = Translation.new(user: user, word: word)
      expect(duplicate_translation.valid?).to be_falsey
    end
  end

  describe '.search' do
    it 'returns translation that matches' do
      word = Word.create(german: 'eins')
      other_word = Word.create(german: 'zwei')
      user = User.create(name: 'me')
      translation = Translation.create(user: user, word: word)
      Translation.create(user: user, word: other_word)

      result = Translation.search(word.id, user.id)
      expect(result).to eq([translation])
    end
  end

  describe '#level' do
    it 'defaults to 1' do
      translation = Translation.create

      expect(translation.level).to eq(1)
    end
  end
end
