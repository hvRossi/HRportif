import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Mynavbar from './components/Mynavbar'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Mynavbar />
    <App/>
  </React.StrictMode>
)
