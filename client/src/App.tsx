import * as React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import { Content } from './components/Content';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Sale from './components/Sale';
import Report from './components/Report';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <SideBar />
            <Switch>
              <Route path="/" exact={true} strict={true} component={Welcome} />
              <Route
                path="/content"
                exact={true}
                strict={true}
                component={Content}
                // render={(props) => <Content {...props} />}
              />
              <Route path="/sale" exact={true} strict={true} component={Sale} />
              <Route
                path="/report"
                exact={true}
                strict={true}
                component={Report}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
