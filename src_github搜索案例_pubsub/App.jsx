import React, {Component} from 'react';
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {


  // saveUsers = (users) => {
  //   this.setState({users});
  // }

  // updateAppState = (stateObj) => {
  //   const { users, isFirst, isLoading, err } = this.state;
  //   this.setState({
  //     users,
  //     isFirst,
  //     isLoading,
  //     err,
  //     ...stateObj
  //   });
  // }

  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    );
  }
}

export default App;