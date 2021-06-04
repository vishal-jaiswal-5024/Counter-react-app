import { render } from '@testing-library/react';
import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
class Count extends Component{
    constructor(props){
        super(props);
        this.state={
            clicks:0,
        }
    };
 

IncNum=()=>{
    
    this.setState({clicks:this.state.clicks+1});
}

DecNum=()=>{
     
    this.setState({clicks:this.state.clicks-1});
   
}
 
render(){
    return(
        <div className="main">
  
            <h2>Count is :{this.state.clicks}</h2> <br></br>
            <button className="btn" onClick={this.IncNum}><AddIcon/></button>
            <button className="btn" onClick={this.DecNum}><RemoveIcon/></button>
 
         
        </div>
    )
    }
}

export default Count;