import React, {Component} from 'react';
import {Button} from "antd";
import {HomeOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

class App extends Component {

  render() {
    return (
      <div>
        APp...
        <Button type="primary">点我</Button>
        <HomeOutlined></HomeOutlined>
      </div>
    );
  }
}

export default App;