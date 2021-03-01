import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import calcul from './reducers/calcul'

import App from './App'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const store = createStore(calcul)

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
