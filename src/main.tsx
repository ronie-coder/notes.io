import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TaskContextProvider from './context/TaskContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskContextProvider>
    <App />
    </TaskContextProvider>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
