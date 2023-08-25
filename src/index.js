import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// you cannot directly wrap it to wrap the app you need the provider - comes from react redux
import { Provider } from 'react-redux';


// for wrapping the application we use the store to use as the storing data of the states in the app in client side
import store from './redux/store';


import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if ( process.env.NODE_ENV === "production") disableReactDevTools();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // can be done by the direct provider but for less confusion use provider 
  // then pass the store prop as the prop to take all the data
  <Provider store={store} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
