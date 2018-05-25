Settings.categories.each do |cate|
  Category.create title: cate.title
end

Settings.card_sets.each do |cs|
  CardSet.create title: cs.title, avatar_url: cs.avatar_url,
                 description: cs.description, category_id: cs.category_id 
end

Settings.collections.each do |collection|
  Collection.create title: collection.title, card_set_id: collection.card_set_id
end

Settings.cards.each do |card|
  c = Card.new title: card.title, avatar_url: card.avatar_url, description: card.description, collection_id: card.collection_id 
  c.save!
end
