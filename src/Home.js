import React, {Component} from 'react';
import { Jumbotron,ButtonToolbar,Button } from 'react-bootstrap';


import Header from './Header.js';

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      counter:0
    }
  }

  handleKlikSaya(){
    alert('tombol di klik')
  }
  render(){
    return(
      <div>
        <Jumbotron>
          <Header />
        </Jumbotron>
        <h3>
          {this.state.counter}
        </h3>
        <button onClick={()=>this.setState({counter:this.state.counter+1})}>
          Increament state button
        </button>

        <ButtonToolbar>
          <Button bsSize="large">Large button</Button>
        </ButtonToolbar>
      </div>
    )
  }
}
