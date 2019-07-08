require 'test_helper'

class SoundControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sound_index_url
    assert_response :success
  end

end
