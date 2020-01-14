class SoundController < ApplicationController
  before_action :authenticate_admin!
  def index
    unless params[:request].nil?
      request = Validation.new(form_params)
      if request.valid?
        client = Google::Cloud::TextToSpeech.new
        synthesis_input = { text: params[:request] }
        voice = {
          language_code: params[:lang],
          name: params[:voicename]
        }
        audio_config = { audio_encoding: 'MP3' }
        TtsConversion.index(client, synthesis_input, voice, audio_config)
        flash[:success] = '<a href="/output/output.mp3" download>Download mp3</a>'.html_safe
      else
        flash[:error] = 'Invalid request format'
      end
    end
  end

  def form_params
    params.permit(:request)
   end
end
