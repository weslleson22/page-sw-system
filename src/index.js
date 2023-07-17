import ReactDom from 'react-dom/client.js';
import App from './App'
import './index.css'
import React from 'react';

const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(<App/>)