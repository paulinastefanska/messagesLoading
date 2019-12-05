import React, { Component } from "react";
import "./App.css";

// pseudo database
const data = [
  { id: 1, title: "Message number 1", body: "Content message number 1 ..." },
  { id: 2, title: "Message number 2", body: "Content message number 2 ..." }
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Message number ${index}`,
    body: `Content message number ${index} ...`
  });
}, 5000);

class App extends Component {
  state = {
    comments: [...data]
  };

  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data]
      });
    }
  };

  componentDidMount() {
    this.idI = setInterval(this.getData, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.idI);
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));
    return <div className="App">{comments.reverse()}</div>;
  }
}

export default App;
