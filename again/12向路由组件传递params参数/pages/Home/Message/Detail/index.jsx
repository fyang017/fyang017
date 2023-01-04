import React, { Component } from 'react'

const DetailData=[
  {id:'01',content:"Japan"},
  {id:'02',content:"Korea"},
  {id:'03',content:"HongKong"},
]

export default class Detail extends Component {
  render() {
    const{id,title}=this.props.match.params
    const findResult=DetailData.find((detailObj)=>{
      return detailObj.id === id
    })
    return (
      <ul> 
         <li> id:{id}</li>
         <li> title:{title}</li>
         <li> content:HongKong</li>
      </ul>
    )
  }
}
