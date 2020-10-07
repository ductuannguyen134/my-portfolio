import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import NotFound from './containers/NotFound';


function App() {
  return (
    <div className="app" id="home">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
