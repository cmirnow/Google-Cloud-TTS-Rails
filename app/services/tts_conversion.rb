class TtsConversion
	def self.index(client, synthesis_input, voice, audio_config)
		response = client.synthesize_speech synthesis_input, voice, audio_config
		File.open "public/output/output.mp3", "wb" do |file|
			file.write response.audio_content
		end
    end
end
