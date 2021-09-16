class TtsConversion
  def self.index(*args)
    response = args[0].synthesize_speech input: args[1],
                                         voice: args[2],
                                         audio_config: args[3]
    File.open 'public/output/output.' +
              audio_format(args[4]).to_s,
              'wb' do |file|
      file.write response.audio_content
      audio_format(args[4]).to_s
    end
  end

  def self.audio_format(codec)
    case codec
    when 'LINEAR16'
      'wav'
    when 'OGG_OPUS'
      'ogg'
    else
      'mp3'
    end
  end
end
