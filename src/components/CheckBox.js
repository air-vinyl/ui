import React from 'react'

function CheckBox ({ onClick, state }) {
  const containerStyle = {
    backgroundColor: state ? '#FF8A68' : '#fff',
    border: '1px solid #FF8A68',
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    transition: '200ms'
  }

  return (
    <div style={containerStyle} onClick={onClick}>
      <img src="/img/icons/check.svg" />
    </div>
  )
}

export default CheckBox
