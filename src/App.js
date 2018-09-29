import React, { Component } from 'react';
import Header from './containers/header';
import Footer from './components/footer/Footer';
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
