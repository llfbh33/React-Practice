import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FavDogProvider from './context/FavDogContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavDogProvider>
      <App />
    </FavDogProvider>
  </React.StrictMode>
)
