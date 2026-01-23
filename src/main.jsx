import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // This now points to our "Clean Slate" App
import './styles/Global.css';
import './styles/Navbar.css';
import './styles/Pages.css';
import './styles/ProjectsUnique.css';
import './styles/Contact.css';
import './styles/Experience.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)