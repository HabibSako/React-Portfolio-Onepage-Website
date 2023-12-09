import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// ROUTER
import RouterBlog from './RouterBlog';

import './index.css';

// dil seçeneği
import './internationalization/i18nlanguage';

//ROUTER
// BrowserRouter http://localhost:3000/
// HashRouter http://localhost:3000/#/
import { BrowserRouter } from 'react-router-dom';

// ROOT - DOM
 const root = ReactDOM.createRoot(document.getElementById('root'));
// const domNode = document.getElementById('root');
// const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterBlog />
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
