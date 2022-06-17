import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider appId="IY27irwDdboKQO09tX7Z4tTr7xcP28vCrSHgzP49" serverUrl="https://5mcoharooy7q.usemoralis.com">
      <App />
    </MoralisProvider>
    
  </React.StrictMode>
);

reportWebVitals();
