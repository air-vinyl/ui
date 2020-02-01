import React from 'react'
import DeviceList from './pages/DeviceList'
import Header from './components/Header'
import Footer from './components/Footer'

const containerStyle = {
  display: 'flex',
  margin: '0 auto',
  width: '100vw',
  maxWidth: '500px',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative'
}

function App () {
  return (
    <div style={containerStyle}>
      <Header />
      <DeviceList />
      <Footer />
    </div>
  )
}

export default App
