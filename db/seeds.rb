require 'csv'

CSV.read("db/words.csv", headers: true, header_converters: :symbol).each do |word|
  found = Word.find_by(german: word[:german])
  next if found

  Word.create(
    german: word[:german], 
    article: word[:article], 
    plural: word[:plural], 
    level: word[:level], 
    category: word[:category]
  )
end
