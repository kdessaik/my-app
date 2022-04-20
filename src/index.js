import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import  FormName from './form/Form'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbars from './header/Navbar'
import Body from './Body/Body'
import Footer from './Footer/Footer'


ReactDOM.render(
  
  <React.StrictMode>
    <Navbars/>
    
    <Body/>
    
    
    <Footer/>
  </React.StrictMode>
  ,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
