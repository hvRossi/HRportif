import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import MainTasks from './components/Maintasks'
import Mynavbar from './components/Mynavbar'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Mynavbar/> 
    <MainTasks/>
  </React.StrictMode>
)
