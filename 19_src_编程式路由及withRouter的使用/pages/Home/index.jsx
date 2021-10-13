import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../components/MyNavLink";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/*<a className="list-group-item active" href="./home-news.html">News</a>*/}
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home/message"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;