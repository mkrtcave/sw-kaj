import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/'})
        .then(function (registration){
            console.log('Service Worker Registered');
        });
    navigator.serviceWorker.ready.then(function (registration){
        console.log('Service Worker Ready')
    });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))   `
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
