class CardSetsController < ApplicationController
  def show
    @card_set = CardSet.includes(:collections).find_by(id: params[:id])
    unless @card_set
      flash[:danger] = "Không tìm thấy bộ thẻ này"
      redirect_to root_path
    end
  end
end
