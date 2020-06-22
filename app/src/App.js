import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { HashRouter, Route } from 'react-router-dom'
import SignIn from './containers/Auth/SignIn'
import Signup from './containers/Auth/Signup'

import './App.css'
import Dashboard from './containers/Auth/Dashboard'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Route exact path='/' component={Dashboard} />
        <Route path='/SignIn' component={SignIn} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
      </HashRouter>
    </Provider>
  )
}

export default App
