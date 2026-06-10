import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import App from './App';
import './index.css';

// Initialize Google Analytics with your Measurement ID
ReactGA.initialize('GA_MEASUREMENT_ID'); // Replace with your actual GA4 Measurement ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename="/Teen-Sleep-Guide">
      <App />
    </HashRouter>
  </React.StrictMode>
);
