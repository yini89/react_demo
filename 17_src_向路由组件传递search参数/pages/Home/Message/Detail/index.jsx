import React, {Component} from 'react';
import qs from 'querystring';

const detailData = [
  {id: '01', content: '你好，中国'},
  {id: '02', content: '你好，河南'},
  {id: '03', content: '你好，固始'},
];

class Detail extends Component {
  render() {
    // 接收params参数
    // const {id, title} = this.props.match.params;

    // 接收search参数
    const {search} = this.props.location;
    const {id, title} = qs.parse(search.slice(1));
    const findResult = detailData.find(obj => {
      return obj.id === id
    });
    console.log(this.props)
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {findResult.content}</li>
      </ul>
    );
  }
}

export default Detail;