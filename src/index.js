import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './store'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import firebase from 'firebase'
import { FirebaseDatabaseProvider } from '@react-firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyC0aFV91CYv08VjboPL3-gp6EkzqnB0oMM',
  authDomain: 'react-calcul.firebaseapp.com',
  databaseURL: 'https://react-calcul-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-calcul',
  storageBucket: 'react-calcul.appspot.com',
  messagingSenderId: '432344110576',
  appId: '1:432344110576:web:83180ce9253551bb8fb935',
  measurementId: 'G-PR46KL4CCD'
}

const store = configureStore()

firebase.initializeApp(firebaseConfig)

render(
  <React.StrictMode>
    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseDatabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
