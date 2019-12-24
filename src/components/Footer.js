import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const containerStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  padding: '0 20px'
}

const linkTextStyle = {
  textDecoration: 'none',
  marginRight: 10
}

function Footer ({ version }) {
  // console.log(window.location.href)
  return (
    <div style={containerStyle}>
      <Link to='/settings'>
        <div style={{ flexDirection: 'row', alignItems: 'center' }}>
          <p style={linkTextStyle} className='italics'>Settings</p>
          <FontAwesomeIcon icon={faCog} color='#666' />
        </div>
      </Link>
      <p className='italics'>{version}</p>
    </div>
  )
}

export default Footer
