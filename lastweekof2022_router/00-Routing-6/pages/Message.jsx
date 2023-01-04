import React,{useState} from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function Message() {

    const [messages]=useState([
        {id:'001',title:'news1',content:'wocao'},
        {id:'002',title:'news2',content:'caocao'},
        {id:'003',title:'news3',content:'yidianchou'} 
    ])
    
    return (
        <div>
            <ul>
                {
               messages.map((message)=>{
                  return(
                    <li key={message.id} >
                     <Link to={`detail/${message.id}/${message.title}/${message.content}`}> 
                     {message.title} 
                    
                     </Link> </li>
                  )
               })
                 }
            </ul>
            <hr/>
            <Outlet />
        </div>
    )
}
