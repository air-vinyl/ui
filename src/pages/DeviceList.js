/* global fetch */

import React, { useState, useEffect } from 'react'

import Device from '../components/Device'
import VolumeSlider from '../components/VolumeSlider'

const containerStyle = {
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center'
}

async function setConfiguration (params) {
  const body = JSON.stringify(params)
  const headers = { 'Content-Type': 'application/json' }
  await fetch('/api', { method: 'PUT', body, headers })
}

async function getConfiguration () {
  console.log('fetching!')
  const res = await fetch('/api')
  const body = await res.json()
  console.log(body)
  return body
}

function DeviceList () {
  const [device, setDevice] = useState(null)
  const [volume, setVolume] = useState(30)
  const [devices, setDevices] = useState([])

  async function update () {
    const { device, volume, devices } = await getConfiguration()
    setDevice(device)
    if (volume != null) setVolume(volume)
    setDevices(devices)
  }

  useEffect(() => {
    update()
    const id = setInterval(update, 5000)
    return () => clearInterval(id)
  }, [])

  const handleVolume = (volume) => {
    setVolume(volume)
    // setConfiguration({ device, volume })
  }

  const updateVolume = () => {
    setConfiguration({ device, volume })
  }

  const handleTogglePlaying = (toggleDevice) => {
    const nextDevice = (device === toggleDevice.id) ? null : toggleDevice.id

    setDevice(nextDevice)
    setConfiguration({ device: nextDevice, volume })
  }

  return (
    <div style={containerStyle}>
      <VolumeSlider onRelease={updateVolume} onVolume={handleVolume} volume={volume} />
      {devices.map((d) => <Device key={d.id} device={d} isPlaying={d.id === device} onTogglePlaying={handleTogglePlaying} />)}
    </div>
  )
}

export default DeviceList
