import React from 'react'

const pStyle = {
  fontStyle: 'italic',
  color: '#999',
  fontWeight: 'bold',
  textDecoration: 'none'
}

function Italics ({ style, children }) {
  return (
    <p style={{ ...pStyle, ...style }}>
      {children}
    </p>
  )
}

export default Italics
