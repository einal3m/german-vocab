require 'rails_helper'

RSpec.describe Word, type: :model do
  describe '.search' do
    it 'returns words that match' do
      word1 = Word.create(german: 'eins')
      word2 = Word.create(german: 'zwei')

      result = Word.search('in')

      expect(result).to eq([word1])
    end
  end
end
