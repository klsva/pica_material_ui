import React from "react"; 
import ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
