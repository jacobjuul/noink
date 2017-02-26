import React from 'react';
import Footer from './Footer/Footer';
import './App.scss';
import logo from './logo.png';

const App = ({ children }) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} role="presentation" />
      </div>
      <div className="App-children">
        {children}
      </div>
      <Footer />
    </div>
  );
};


export default App;
