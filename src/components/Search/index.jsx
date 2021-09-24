import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
  search = () => {
  //  获取用户的输入   连续解构赋值+重命名
    const { keyWordElement: {value: keyWord} } = this;
    console.log('keyWord-- ',keyWord)
    //  发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        console.log(response);
      },
      error => {
        console.error(error)
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键字"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;