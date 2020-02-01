import React from 'react'

import { version } from '../../package.json'

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

function Footer () {
  // console.log(window.location.href)
  return (
    <div style={containerStyle}>
      <p className='italics'>{version}</p>
    </div>
  )
}

export default Footer
