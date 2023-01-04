import React, { Component } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import './App.css';

export default class App extends Component {

  state={ todos:[
    {id:'1',name:'Eat',done:false},
    {id:'2',name:'Sleep',done:false},
    {id:'3',name:'Code',done:false},
  ]}

  addTodo=(todoObj)=>{
    const{todos}=this.state
    const newTodos=[todoObj,...todos]
    this.setState(newTodos)
  }

  render() {
    //const {todos}=this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
        <Header addTodo={this.addTodo}/>
        <List />
        <Footer />
        </div>
       </div>
    )
  }
}




//export default App;
 