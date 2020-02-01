import React from 'react'

const containerStyle = {
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center'
}

const imgStyle = {
  display: 'flex',
  width: '80%',
  margin: '20px auto'
}

function Header () {
  return (
    <div style={containerStyle}>
      <img alt='logo' style={imgStyle} preserveAspectRatio='none' src='/img/air-vinyl.svg' />
    </div>
  )
}

export default Header
