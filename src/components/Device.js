import React from 'react'
import CheckBox from '../components/CheckBox'
import DeviceIcon from './DeviceIcon'

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

  const pStyle = {
    flex: 1,
    marginLeft: 10
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
        <CheckBox state={device.playing} onClick={() => {}} />
        <p style={pStyle} className='italics'>{device.name}</p>
        <DeviceIcon model={device.model} />
      </div>
      <div style={borderStyle} />
    </div>
  )
}

export default Device
