import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import DeviceList from './pages/DeviceList'
import Header from './components/Header'
import Footer from './components/Footer'

function App ({ version }) {
  return (
    <Router style={{ minHeight: '100vh' }}>
      <link href='https://fonts.googleapis.com/css?family=Lato&display=swap' rel='stylesheet' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ff8a68' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='theme-color' content='#ffffff' />
      <Header />
      <Switch>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route path='/'>
          <DeviceList />
        </Route>
      </Switch>
      <Footer version={version} />
    </Router>
  )
}

function Settings () {
  return <h2>Settings</h2>
}

export default App
