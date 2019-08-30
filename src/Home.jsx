import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
class Home extends Component {
  // componentWillLeave () {
  //   console.log('Component will leave')
  // }

// below code is for how to use anchor link between page using link tag in reactjs

//   render () {            
//     return (        
//       <div>
//         <h2>HELLO</h2>   
//         <p>Cras facilisis urna ornare ex volutpat, et
//         convallis erat elementum. Ut aliquam, ipsum vitae
//         gravida suscipit, metus dui bibendum est, eget rhoncus nibh
//         metus nec massa. Maecenas hendrerit laoreet augue               
//         nec molestie. Cum sociis natoque penatibus et magnis
//         dis parturient montes, nascetur ridiculus mus.</p>
//         <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
//         <Link to="/Contact">Contact</Link>  
//       </div>
//     )
//   }
// }      


// below code is for add class to element in reactjs     

//   constructor(props) {
//     super(props);
//     this.state = {addClass: false}
//   }
//   toggle() {
//     this.setState({addClass: !this.state.addClass});
//   }
//   render() {
//     let boxClass = ["box"];
//     if(this.state.addClass) {
//       boxClass.push('green');
//     }
//     return(
//         <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "Remove a class" : "Add a class (click the box)"}<br />Read the tutorial <a href="http://www.automationfuel.com" target="_blank">here</a>.</div> 

//     );
//   }
// }

// below code is for to hide show element in reactjs

constructor(props) {
    super(props);
    this.state = {
      shown: true,
    };
  } 
  
  toggle() {
    this.setState({
      shown: !this.state.shown        
    });
  }
    
  render() {
    var shown = {
      display: this.state.shown ? "block" : "none"
    };
    
    var hidden = {
      display: this.state.shown ? "none" : "block"
    }
    
    return (
      <div>
        <h2 style={ shown }>this.state.shown = true</h2>
        <h2 style={ hidden }>this.state.shown = false</h2>
        <button onClick={this.toggle.bind(this)}>Toggle</button>
      </div>
    )
  }
}


export default Home
