import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    const { keyWordElement: { value: keyWord } } = this
    this.props.updataAppStates({ isFirst: false, isLoading: true })
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        this.props.updataAppStates({ isLoading: false, users: response.data.items })
      },
      error => {
        this.props.updataAppStates({ isLoading: false, err: error })
      }
    )
  }

  render() {
    return (

      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search} >Search</button>
        </div>
      </section>

    )
  }

}
