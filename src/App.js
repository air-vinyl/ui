import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import DeviceList from './pages/DeviceList'
import Header from './components/Header'

function App () {
  return (
    <Router>
      <link href='https://fonts.googleapis.com/css?family=Lato&display=swap' rel='stylesheet' />
      {/* <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>
        </nav> */}
      <Header />
      <Switch>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route path='/'>
          <DeviceList />
        </Route>
      </Switch>
    </Router>
  )
}

function Settings () {
  return <h2>Settings</h2>
}

export default App
