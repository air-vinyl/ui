import React from 'react'
import CheckBox from '../components/CheckBox'

function Device ({ device, onTogglePlaying }) {
  const containerStyle = {
    flexDirection: 'column',
    width: '100%'
  }

  const rowStyle = {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px',
    boxSizing: 'border-box'
  }

  const borderStyle = {
    background: 'linear-gradient(to right, #fff, #ccc, #fff)',
    width: '100%',
    height: 1
  }

  const toggleClick = () => {
    onTogglePlaying(device)
  }

  return (
    <div onClick={toggleClick} style={containerStyle}>
      <div style={rowStyle}>
        <CheckBox state={device.playing} onClick={toggleClick} />
        <p className='italics'>{device.name}</p>
      </div>
      <div style={borderStyle} />
    </div>
  )
}

export default Device
