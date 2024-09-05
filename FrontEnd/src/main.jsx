import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Info from './Component/Info.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div class='props'>
    <Info name='Osama Khan' Age='24 Year' City='Swat' Degree='Bs Software'></Info>
    </div>
    
  </StrictMode>,
)
