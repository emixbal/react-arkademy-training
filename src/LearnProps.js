import React, {Component} from 'react';


class LearnProps extends Component{
  render(){
    return(
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    )
  }
}

// in diferent style
// function LearnProps(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

export default LearnProps;
