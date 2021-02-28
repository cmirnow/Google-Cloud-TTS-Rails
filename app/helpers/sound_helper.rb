module SoundHelper
  def speaking_rate
    select_tag 'speaking_rate', options_for_select(
      0.25.step(by: 0.25, to: 4.0), selected: '1.0'
    ), { class: 'btn' }
  end
end
