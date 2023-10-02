import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HoroscopeContext } from './context/HoroscopeContext';

const Root = () => {
  return (
    <HoroscopeContext.Provider value={{ sign: 'Leo' }}>
      <App />
    </HoroscopeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
