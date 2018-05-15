class CategoriesController < ApplicationController
  def show
    @category = Category.includes(:card_sets).find_by(id: params[:id])
    unless @category
      flash[:danger] = "Không thể tìm thấy danh mục này"
      redirect_to root_path
    end
  end
end
