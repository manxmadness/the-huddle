import React, {Component} from 'react';

class Message extends Component {
  componentWillMount() {
    var colors = ['#549477', '#14745f', '#6d6e71'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 15, "px"),
      top: this.randomBetween(0, window.innerHeight - 15, "px"),
      background: random_color,
      padding:10
    }
  }
  randomBetween = (x, y, s) => {
    return (x + Math.ceil(Math.random() * (y-x)) + s)
  }
  render(){
    return (
      <div className="note" style={this.style}>
        <h1>{this.props.message}</h1>
      <ul>
      <li id="description">{this.props.description}</li>
      <li id="date">Start date: {this.props.date}</li>
      <li id="age">{this.props.age}</li>
      <li id="level">{this.props.level}</li>
      <li id="contact"><a href="">{this.props.contact}</a></li>
      </ul>
      </div>
    )
  }
}
export default Message
