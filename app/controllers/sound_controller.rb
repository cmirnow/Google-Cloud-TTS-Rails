class SoundController < ApplicationController
  before_action :authenticate_admin!
  def index
    unless params[:request].nil?
      request = Validation.new(form_params)
      if request.valid?
        client = Google::Cloud::TextToSpeech.new
        synthesis_input = { params[:text_or_ssml] => params[:request] }
        voice = {
          language_code: params[:lang],
          name: params[:voicename]
        }
        audio_config = { audio_encoding: params[:codec] }
        audio_format = TtsConversion.index(client, synthesis_input, voice, audio_config, params[:codec])
        flash[:success] = "<a href='/output/output.#{audio_format}' download>Download #{audio_format}</a>".html_safe
      else
        flash[:error] = 'Invalid request format'
      end
    end
  end

private
  def form_params
    params.permit(:request)
   end
end

