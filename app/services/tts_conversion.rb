class TtsConversion
  def self.index(client, synthesis_input, voice, audio, codec)
    response = client.synthesize_speech input: synthesis_input, voice: voice, audio_config: audio
    File.open 'public/output/output.' + audio_format(codec).to_s, 'wb' do |file|
      file.write response.audio_content
      audio_format(codec).to_s
    end
  end

  def self.audio_format(codec)
  	case codec
  	when "LINEAR16"
  		'wav'
  	else
  		'mp3'
  	end
  end
end
