class CollectionsController < ApplicationController
  def show
    @collection = Collection.includes(:cards).find_by(id: params[:id])
    unless @collection
      flash[:danger] = "Không thể tìm thấy bộ sưu tập này"
      redirect_to root
    end
  end
end
