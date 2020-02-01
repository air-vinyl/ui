import React from 'react'

function DeviceIcon ({ model = '' }) {
  let alt, src
  if (model.includes('AudioAccessory')) {
    alt = 'HomePod'
    src = '/img/devices/homepod.svg'
  } else if (model.includes('TV')) {
    alt = 'TV'
    src = '/img/devices/tv.svg'
  } else { // AirPort etc
    alt = 'Speaker'
    src = '/img/devices/speaker.svg'
  }

  const imgStyle = {
    height: 40,
    width: 60
  }

  return (
    <img style={imgStyle} alt={alt} src={src} />
  )
}

export default DeviceIcon
