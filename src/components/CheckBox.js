import React from 'react'

const iconSyle = {
  width: '20px'
}

function CheckBox ({ onClick, state }) {
  const containerStyle = {
    display: 'flex',
    backgroundColor: state ? '#FF8A68' : '#fff',
    border: '1px solid #FF8A68',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    transition: '200ms'
  }

  return (
    <div style={containerStyle} onClick={onClick}>
      <img style={iconSyle} src='/img/icons/check.svg' />
    </div>
  )
}

export default CheckBox
