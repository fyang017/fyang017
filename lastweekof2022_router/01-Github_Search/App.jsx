import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: '',
  }

  updataAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {

    return (
      <div className="container">
        <Search updataAppStates={this.updataAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
