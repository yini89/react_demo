import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js';

class Search extends Component {
  search = async () => {
    PubSub.publish('atguigu', {isFirst: false, isLoading: true});

  //  获取用户的输入   连续解构赋值+重命名
    const { keyWordElement: {value: keyWord} } = this;
    // this.props.updateAppState({
    //   isFirst: false,
    //   isLoading: true,
    // });
    //  发送网络请求
    // 使用axios发送
    /*axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        console.log(response)
        PubSub.publish('atguigu', {users: response.data.items, isLoading: false});
      },
      error => {
        console.log(error);
        PubSub.publish('atguigu', {err: error.response.data.message, isLoading: false});
      }
    )*/
  //  使用fetch发送
    PubSub.publish('atguigu', {isFirst: false,isLoading: true});
    // 未优化
    // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response => {
    //     console.log('联系服务器成功-- ')
    //     return response.json();
    //   },
    //   error => {
    //     console.log('联系服务器失败-- ',error)
    //     return new Promise(()=>{})
    //   }
    // ).then(
    //   res => {
    //     console.log('成功-- ',res)
    //   },
    //   err => {
    //     console.log('失败-- ',err)
    //   }
    // );
    // 优化1
    // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response => {
    //     console.log('联系服务器成功-- ')
    //     return response.json();
    //   }
    // ).then(
    //   res => {
    //     console.log('成功-- ',res)
    //   }
    // ).catch(err => {
    //   console.log('失败-- ',err)
    // });

    // 优化2
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`);
      const data = await response.json();
      console.log('data-- ', data)
      PubSub.publish('atguigu', {users: data.items, isLoading: false});
    } catch (e) {
      console.log('失败-- ',e)
      PubSub.publish('atguigu', {err: e.response.data.message, isLoading: false});
    }
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