import React, { useState } from 'react'
import '../css/DeviceList.css'
import Device from '../components/Device'
import VolumeSlider from '../components/VolumeSlider'

const testData = [
  {
    id: 1,
    name: 'Kitchen HomePod',
    playing: true,
    type: 'homepod'
  }, {
    id: 2,
    name: 'Living-Room',
    playing: false,
    type: 'speaker'
  }, {
    id: 3,
    name: 'Hemmabio',
    playing: true,
    type: 'appletv'
  }
]

function DeviceList () {
  const [volume, setVolume] = useState(30)
  const [devices, setDevices] = useState(testData)

  const onTogglePlaying = (toggleDevice) => {
    setDevices(devices.map(device => {
      if (device.id === toggleDevice.id) {
        device.playing = !device.playing
      }
      return device
    }))
  }

  return (
    <div className='deviceList'>
      <VolumeSlider onVolume={setVolume} volume={volume} />
      {devices.map((device) => <Device onTogglePlaying={onTogglePlaying} key={device.id} device={device} />)}
    </div>
  )
}

export default DeviceList
