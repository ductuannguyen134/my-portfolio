import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';


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
