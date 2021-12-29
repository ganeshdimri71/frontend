import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ReactDOM from 'react-dom'
import App from './App'
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
const routing =   (
      <Router>
        <React.StrictMode>
          <Header />
          <Switch>
            <Route exact path="/" component={App}/>
          </Switch>
          <Footer />
        </React.StrictMode>
      </Router>
  );

ReactDOM.render(routing, document.getElementById('root'))


