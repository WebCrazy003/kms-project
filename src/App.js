import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Home, Education, Footer, Empty } from './component';
import AboutContainer from './container/about';
import SkillContainer from './container/skill';
import HeaderContainer from './container/header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HeaderContainer />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={AboutContainer} />
            <Route path="/skill" exact component={SkillContainer} />
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
