import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  
  // constraints
  static PropTypess={
    addTodo:PropTypes.func.isRequired
  }

  // The callback function of keybpard event
  handleKeyUp=(event)=>{
    const{target,keyCode}=event
    // Judge weather is "Ënter"
     if(keyCode!==13) return   // Enter is 13
     if(target.value.trim()==='') {alert('You entered nothing') 
           return
          }
     // The format should be corresponding to the regulation of functon addTodo
     const todoObj={id:nanoid(),name:target.value,done:false}
     this.props.addTodo(todoObj);
     //Clear target
     target.value='';
  }

  render() {
    return (
        <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}

