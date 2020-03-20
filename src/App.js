import React, { Component } from 'react';
import './App.css';



const data = [
  { id: 1, title: 'Message number 1', body: 'Message number 1 content ...' },
  { id: 2, title: 'Message number 2', body: 'Message number 2 content ...' }
]

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Message number ${index}`,
    body: `Message number ${index} content ...`
  })
  // console.log(data)
}, 5000)

class App extends Component {
  state = {
    comments: [...data]
  }

  getData = () => {

    if (this.state.comments.length !== data.length) {
      console.log('actualization')
      this.setState({
        comments: [...data]
      })
    } else {
      console.log('data are consistent, no update');
    }

  }
  componentDidMount() {
    this.idI = setInterval(this.getData, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.idI)
  }


  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ))
    return (
      <div className="App">
        {comments.reverse()}
      </div>
    );
  }
}

export default App;
