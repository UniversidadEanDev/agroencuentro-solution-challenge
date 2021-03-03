import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AuthContextProvider } from './context/stores/Auth/AuthContext'
ReactDOM.render(<AuthContextProvider><App /></AuthContextProvider>, document.getElementById('app'))
