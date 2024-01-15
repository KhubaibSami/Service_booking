import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="598413730011-61je79q2887gdovvam0bb3fl27ittvpq.apps.googleusercontent.com">
       <App />
       </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
