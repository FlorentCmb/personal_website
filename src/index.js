// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// Functions
import reportWebVitals from './reportWebVitals'
// Components
import App from './App'
// Style
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()