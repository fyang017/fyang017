import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'


export default class Message extends Component {
  state={
    messageArr:[
      {id:'01',title:'news 01'},
      {id:'02',title:'news 02'},
      {id:'03',title:'news 03'},
    ]
  }
  render() {
    const{messageArr}=this.state

    return (
        <div>
         <ul>
           {
            messageArr.map((msgObj)=>{
             
                return(
                  <li key={msgObj.id}>
                     {/* 向routing 传递 search 参数 */}
                    <Link to={`/home/message/detail/ id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                  </li>
                )
            })
           }
         </ul>
         <hr/>
         {/*声明接受params
         <Route path="/home/message/detail/ :id/:title" component={Detail}/>
         */}

         {/* search参数无需声明接收,正常注册路由即可*/}
        <Route path="/home/message/detail/" component={Detail}/>
      </div>
    )
  }
}

