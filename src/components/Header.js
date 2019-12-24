import React from 'react'
import '../css/DeviceList.css'
import logo from '../img/air-vinyl.svg'

const containerStyle = {
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center'
}

const imgStyle = {
  width: '80%',
  margin: '20px 0'
}

function Header () {
  return (
    <div style={containerStyle}>
      <img style={imgStyle} preserveAspectRatio='none' src={logo} />
    </div>
  )
}

export default Header
