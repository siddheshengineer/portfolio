import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';      // your Tailwind + dot-pattern styles
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // 1️⃣ Import BrowserRouter (or HashRouter)
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // 2️⃣ Wrap App in the router
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// // (Optional) performance measurements
// reportWebVitals();
