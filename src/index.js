import React from 'react'
import ReactDOM from 'react-dom/client'
import { WordProvider } from './context/context'
import App from './App'
import './scss/main.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WordProvider>
      <App />
    </WordProvider>
  </React.StrictMode>
);
