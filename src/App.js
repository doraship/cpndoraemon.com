import React, { Component } from 'react';
import Header from './containers/Header';
import Footer from './components/Footer/Footer';
import Router from './Router';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
