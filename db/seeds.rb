require 'csv'

CSV.read("db/seeds.csv", headers: true, header_converters: :symbol).each do |word|
  Word.create(german: word[:german], level: word[:level], category: word[:category])
end
