class TtsConversion
  def self.index(*args)
    response = args[0].synthesize_speech input: args[1],
                                         voice: args[2],
                                         audio_config: args[3]
    file_write(args[4], response)
  end

  def self.file_write(codec, response)
    File.open Rails.root.join(
      'public',
      'output',
      "#{'output'}.#{audio_format(codec)}"
    ),
              'wb' do |file|
      file.write response.audio_content
      audio_format(codec)
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
