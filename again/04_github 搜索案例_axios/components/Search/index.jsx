import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search=()=>{
    // Get input
    // const {value}=this.keyWordElement this.keyWordElement.value
    const{keyWordElement:{value:keyWord}}=this

    this.props.uppdataAppState({isFirst:false,isLoading:true})

    // Send request
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response=>{
        this.props.uppdataAppState({isLoading:false,users:response.data.items})
      },
      error=>{
        this.props.uppdataAppState({isLoading:false,err:error.message})
      }
    )
  }
  render() {
    return (
        <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c =>this.keyWordElement =c}  type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

