import React, {Component} from 'react';
const detailData = [
  {id: '01', content: '你好，中国'},
  {id: '02', content: '你好，河南'},
  {id: '03', content: '你好，固始'},
];

class Detail extends Component {
  render() {
    const {id, title} = this.props.match.params;
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