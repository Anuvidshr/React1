//web ke dom ko implement ya manipulate krne k liye libraryimport React from 'react'; core foundational library which takes refrences
import React from 'react';
import ReactDOM from 'react-dom/client';/*implementation of react on dom*/
import App from './App';
/*import reportWebVitals from './reportWebVitals';*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


