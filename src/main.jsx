import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LikeProvider } from './context/LikeContext';

import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <LikeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LikeProvider>,
  document.getElementById('root'),
);
