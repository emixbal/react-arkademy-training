import React, {Component} from 'react';
import axios from 'axios'
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
    constructor(){
        super()

        this.state = {
            data : []
        }
    }

    componentDidMount(){
        this.get_data()
    }

    get_data = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
            const newData = this.state.data.concat(data.data)

            this.setState({
                data : newData
            })
        })
    }

  render(){
      const {data} = this.state;
      const list_data = data.map((item, i) => {
          return (
              <div>
                  <p>
                     {i + 1}. &nbsp;
                    {item.body}
                </p>
              </div>
          )
      })
    return(
      <div style={contentStyle}>
        <Title />
        <SubHeading />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.

        <br />
        <br />
        <h3>Content</h3>
        {list_data}
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
