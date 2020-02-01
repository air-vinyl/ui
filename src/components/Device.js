import React from 'react'
import CheckBox from '../components/CheckBox'
import DeviceIcon from './DeviceIcon'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
}

const rowStyle = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '6px 15px',
  boxSizing: 'border-box'
}

const pStyle = {
  flex: 1,
  marginLeft: 10,
  color: '#999',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap'
}

const borderStyle = {
  background: 'linear-gradient(to right, #fff, #ccc, #fff)',
  width: '100%',
  height: 1
}

function Device ({ device, onTogglePlaying, isPlaying }) {
  const toggleClick = () => {
    onTogglePlaying(device)
  }

  return (
    <div onClick={toggleClick} style={containerStyle}>
      <div style={rowStyle}>
        <CheckBox state={isPlaying} onClick={() => {}} />
        <p style={pStyle}>{device.name}</p>
        <DeviceIcon model={device.model} />
      </div>

      <div style={borderStyle} />
    </div>
  )
}

export default Device
