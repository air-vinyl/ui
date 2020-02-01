import React from 'react'

const containerStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center'
}

function VolumeSlider ({ onVolume, volume }) {
  const handleChange = (event) => {
    onVolume(Number(event.target.value))
  }

  return (
    <div style={containerStyle}>
      <input type='range' min='0' max='100' step='1' value={volume} onChange={handleChange} />
    </div>
  )
}

export default VolumeSlider
