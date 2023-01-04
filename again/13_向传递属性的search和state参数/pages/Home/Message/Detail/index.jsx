import React, { Component } from 'react'
import {qs} from 'url-parse'

const DetailData=[
  {id:'01',content:'Japan'},
  {id:'02',content:'Korea'},
  {id:'03',content:'HongKong'},
]

export default class Detail extends Component {
  render() {
    //const{id,title}=this.props.match.params
   
    /* 接收search 参数   seach参数在 location.search里，但是需要自己整理*/
    const {search}=this.props.location
    console.log(search)
      //这一步很牛，是解构赋值.  但是没跑通，有版本问题，这个最后整理一定要看，还有一个属性是 state方法，但这个state是routing的state,不是本身的那个state
    const {id,title}=qs.parse(search.slice(1))
   
    return (
      <ul> 
         <li> id:{id}          </li>
         <li> title:{title}       </li>
         <li> content:Hong Kong</li>
      </ul>
    )
  }
}
