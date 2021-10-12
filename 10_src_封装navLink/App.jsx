import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*<NavLink className="list-group-item" activeClassName="atguigu" to="/about">About</NavLink>*/}
              {/*<NavLink className="list-group-item" activeClassName="atguigu" to="/home">Home</NavLink>*/}
              <MyNavLink to="/about" a="a" b="b">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About}></Route>
                <Route path="/home" component={Home}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;