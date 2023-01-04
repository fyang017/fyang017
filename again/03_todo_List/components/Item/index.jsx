import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {

  state={mouse:false} //shu biao yi ru yi chu 
  //Mosue callback function
  handleMouse=(flag)=>{
     return()=>{
      this.setState({mouse:flag})
     }
  }
  
  // gou xuan/ qu xiao gou xuan de callback
  handleCheck=(id)=>{
     return(event)=>{
       this.props.updateTodo(id,event.target.checked)
     }
  }

  // Delete a todo   zhe ge shi bu yong gao jie han shu de xing shi 
  handleDelete=(id)=>{
     this.props.deleteTodo(id)
  }

  render() {
    const {id,name,done}=this.props
    const {mouse}=this.state
    return (
        <li style={{backgroundColor:mouse? '#ddd':'white'}}  onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>  
            <span>{name}</span>
          </label>
          <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse? 'block':'none'}}>删除</button>
        </li>
    )
  }
}
