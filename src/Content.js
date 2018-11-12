import React, {Component} from 'react';

function Title(){
  return(
    <div style={title}>
      Pnggunaan react untuk aplikasi frontend
    </div>
  )
}

const SubHeading = ()=>{
  return(
    <div style={subHeading}>
      Pnggunaan react untuk aplikasi frontend dengan best practice
    </div>
  )
}

export default class Content extends Component {
  render(){
    return(
      <div style={contentStyle}>
        <Title />
        <SubHeading />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </div>
    )
  }
}

const title = {
  fontSize:35,
}

const subHeading = {
  fontSize:11,
}
const contentStyle = {
  height:500,
  fontSize:12,
};
