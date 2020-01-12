import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import './App.css';

import Nav from './components/Nav';
import Router from './Router';

function App() {

  return (
    <Provider className="App" store={store}>
      <BrowserRouter> 
      <Nav />
      <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
