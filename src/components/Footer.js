import React from 'react'

import { version } from '../../package.json'

const containerStyle = {
  width: '100%',
  flexDirection: 'row',
  display: 'flex',
  flexGrow: 1,
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  padding: '0 20px'
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
