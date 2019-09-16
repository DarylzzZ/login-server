import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { HashRouter, Route } from 'react-router-dom'
import Login from './containers/Auth/Login'
import Signup from './containers/Auth/Signup'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Route path={'/login'} component={Login} />
        <Route path={'/signup'} component={Signup} />
      </HashRouter>
    </Provider>
  )
}

export default App
