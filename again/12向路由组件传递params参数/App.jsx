import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNaviLink'

export default class App extends Component {
  render() {
    return (
      <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <Header/>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* <a className="list-group-item" href="./about.html">About</a>
          <a className="list-group-item active" href="./home.html">Home</a> */}
          {/* 现在用路由链接去实现切换组件 */}     
          
          <MyNavLink to="/about"  a={1} b={2} c={3}>About</MyNavLink>
          <MyNavLink to="/home">Home</MyNavLink>
          
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注册路由 */}
            
          <Switch>
          <Route path="/about" component={About}/>
          <Route path="/home"  component={Home}/>
          <Redirect to="/about"></Redirect>
          </Switch>
            
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}





