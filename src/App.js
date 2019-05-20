import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Footer from './component/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
