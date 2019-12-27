import React from 'react'

import homepod from '../img/devices/homepod.svg'
import speaker from '../img/devices/speaker.svg'
import tv from '../img/devices/tv.svg'

function DeviceIcon ({ model }) {
  let img = null
  if (model.includes('AudioAccessory')) {
    img = homepod
  } else if (model.includes('TV')) {
    img = tv
  } else { // AirPort etc
    img = speaker
  }

  const imgStyle = {
    height: 40,
    width: 60
  }

  return (
    <img style={imgStyle} src={img} />
  )
}

export default DeviceIcon
