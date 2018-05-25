class StaticPagesController < ApplicationController
  def index
    @categories = Category.all
    @card_sets = CardSet.all
  end
end
