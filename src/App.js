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
