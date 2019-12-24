import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

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
      <FontAwesomeIcon icon={faCheck} color='#fff' />
    </div>
  )
}

export default CheckBox
