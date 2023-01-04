// wai ke zu jian
import React,{Component} from 'react'
import './App.css'
// DOU SHI TAO LU 
//rcc
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
// craet and export 
// important

export default class App extends Component {
  // state initialization
  state={ todos:[
    {id:'001', name:'Eat',done:true},
    {id:'002', name:'Sleep',done:true},
    {id:'003', name:'Code',done:false},
    {id:'004', name:'Fuck',done:true},
  ]}
  
  // addTodo is used to add todo
  addTodo=(todoObj)=>{
     //get original todos
     const {todos}=this.state
     //pre add 
     const nowTodos=[todoObj,...todos]
     // renew the state
     this.setState({todos: nowTodos})
  }

  // for Item 
  updateTodo=(id,done)=>{
    //event.target.checked
    // get todos of state
    const {todos}=this.state
    // handle data
    const newTodos=todos.map((todoObj)=>{
      if(todoObj.id===id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  deleteTodo=(id)=>{
     // get todos
     const {todos}=this.state
     const newTodos=todos.filter ((todoObj)=>{
      return todoObj.id !== id  //filter return what we need
     })
     this.setState({todos:newTodos});
  }

  checkAllTodo=(done)=>{
     const {todos}=this.state
     const newTodos=todos.map((todoObj)=>{
        return {...todoObj,done}
     })
     this.setState({todos:newTodos})
    }
  
  clearAllDone=()=>{
     const{todos}=this.state
     const newTodos=todos.filter((todoObj)=>{
      return !todoObj.done  // filter return what we need
     })
     this.setState({todos:newTodos})
  }

  render() {
    // Get State 
    const {todos}=this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
         <Header addTodo={this.addTodo}/>
         <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
         <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
      </div>
  </div>
    )
  }
}




