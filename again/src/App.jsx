import React, { Component } from 'react'
import { Button } from 'antd';
import 'antd/dist/reset.css'
import {TwitterCircleFilled} from '@ant-design/icons'

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <button> Click On Me</button>
        <Button type="primary">Click On Me</Button>
        <Button type="link">Click On Me</Button>
        <TwitterCircleFilled />
        </div>
    )
  }
}


