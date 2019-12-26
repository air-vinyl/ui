/* global fetch */

import React, { useState, useEffect } from 'react'
import '../css/DeviceList.css'
import Device from '../components/Device'
import VolumeSlider from '../components/VolumeSlider'

async function setConfiguration (params) {
  const body = JSON.stringify(params)
  const headers = { 'Content-Type': 'application/json' }
  await fetch('/api/configuration', { method: 'PATCH', body, headers })
}

async function getDevices () {
  console.log('fetching!')
  const res = await fetch('http://localhost:3000/api/devices')
  const body = await res.json()
  console.log(body)
  return body
}

function DeviceList () {
  const [volume, setVolume] = useState(30)
  const [devices, setDevices] = useState([])

  useEffect(() => {
    getDevices().then(setDevices)
    const id = setInterval(async () => {
      console.log('fetching')
      getDevices().then(setDevices)
    }, 5000)

    return () => clearInterval(id)
  }, [])

  const onTogglePlaying = (toggleDevice) => {
    setDevices(devices.map(device => {
      if (device.id === toggleDevice.id) {
        device.playing = !device.playing
      } else {
        device.playing = false
      }
      return device
    }))
    if (toggleDevice.playing) {
      setConfiguration({ device: toggleDevice.id })
    } else {
      setConfiguration({ device: null })
    }
  }

  return (
    <div className='deviceList'>
      <VolumeSlider onVolume={setVolume} volume={volume} />
      {devices.map((device) => <Device onTogglePlaying={onTogglePlaying} key={device.id} device={device} />)}
    </div>
  )
}

export default DeviceList
