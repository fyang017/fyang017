import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
  
export default class App extends Component {
  
  // state initialation 
  state={users:[],
         isFirst:true,
         isLoading:false,
         err:'',
        }
  
  uppdataAppState=(stateObj)=>{
     this.setState(stateObj)

  }

  render() {
   
    return (
        <div className="container">
        <Search uppdataAppState={this.uppdataAppState}/>
        <List {...this.state}/>
      </div> 
    )
  }
}
