import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StepContextProvider from './context/step-context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StepContextProvider>
      <App />
    </StepContextProvider>
  </React.StrictMode>,
)
