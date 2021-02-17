import React from 'react'
import { Navbar } from './components/Navbar'
import './styles.css'
import { firebaseConfig } from './config/settings'
import firebase from 'firebase/app'

firebase.initializeApp(firebaseConfig)

export const App = () => (
  <>
    <Navbar />
    <h1 className='text-gray-400'>Welcome to AgroEncuentro!</h1>
  </>
)
