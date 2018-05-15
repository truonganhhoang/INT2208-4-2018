require 'test_helper'

class CollectionsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get collections_show_url
    assert_response :success
  end

end
