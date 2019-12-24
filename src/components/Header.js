import React from 'react'
import logo from '../img/air-vinyl.svg'
import { Link } from 'react-router-dom'

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
    <Link to='/'>
      <div style={containerStyle}>
        <img alt='logo' style={imgStyle} preserveAspectRatio='none' src={logo} />
      </div>
    </Link>
  )
}

export default Header
