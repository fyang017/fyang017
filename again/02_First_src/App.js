// wai ke zu jian
import React,{Component} from 'react'
import Hello from './component/Hello react/Hello react'
import Welcome from './component/Welcome/Welcome'
// DOU SHI TAO LU 

// craet and export 
// important
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}


