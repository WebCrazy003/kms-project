import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Skill from './component/Skill';
import Education from './component/Education';
import Footer from './component/Footer';
import Empty from './component/Empty';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/skill" exact component={Skill} />
            <Route path="/education" exact component={Education} />
            <Route path="/experience" exact component={Empty} />
            <Route path="/work" exact component={Empty} />
            <Route path="/blog" exact component={Empty} />
            <Route path="/contact" exact component={Empty} />
            <Route render={() => <Redirect to={{ home: '/' }} />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
