import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { ChurchProvider } from './contexts/churchContexts';

ReactDOM.render(
  <React.StrictMode>
    <ChurchProvider>
    <App />
    </ChurchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
