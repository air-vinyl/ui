import React from 'react'

import homepod from '../img/devices/homepod.svg'
import speaker from '../img/devices/speaker.svg'
import tv from '../img/devices/tv.svg'

function DeviceIcon ({ model = '' }) {
  let alt, src
  if (model.includes('AudioAccessory')) {
    alt = 'HomePod'
    src = homepod
  } else if (model.includes('TV')) {
    alt = 'TV'
    src = tv
  } else { // AirPort etc
    alt = 'Speaker'
    src = speaker
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
