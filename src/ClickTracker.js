import React from "react"

export class ClickTracker extends React.Component{
    state = {
        count: 0 
    }
  
    
    handleButton = (event) => {
       console.log (
        event.target
       )
       
       this.setState((state)=>{
        return{
        count: state.count + 1 
        }
    })
    }
    render(){
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button name={1}onClick={this.handleButton}>Add </button>
                <button name={2} onClick={this.handleButton}>Add </button>
                <button name={3} onClick={this.handleButton}>Add </button>
              
            </div>
        )
    }

    
}