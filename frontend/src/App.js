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
import Login from './containers/Login';
import Register from './containers/Register';
import NotFound from './containers/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      {/* Body */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          {/* Not found route */}
          <Route path="/notfound">
            <NotFound />
          </Route>
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
