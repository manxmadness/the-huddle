import React, {Component} from 'react';
import trim from 'trim';

class MessageBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      description: '',
      age: 'Child',
      level: 'Recreational',
      date: '',
      contact: '',
      aptBodyVisible: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
   this.setState(
       {
         message: e.target.value,
         description: e.target.value,
         age: e.target.value,
         level: e.target.value,
         contact: e.target.value,
         date: e.target.value
       }
     );
  }
  handleSubmit(e){

    let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: this.state.message,
        description: this.state.description,
        age: this.state.age,
        contact: this.state.contact,
        level: this.state.level,
        date: this.state.date
      });
      this.setState({
        message: '',
        description: '',
        age: 'Child',
        level: 'Recreational',
        date: '',
        contact: '',
        aptBodyVisible: false
      });
       e.preventDefault();
     }
  render() {
    return (

      <div id="popup" className="inviz container popup rounded">
      <div className="x" id="x"><i className="pull-right fa fa-times" aria-hidden="true"></i></div>
      <div className="inner-popup">
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="textInput1">Activity</label>
        <input className="form-control" type="text" value={this.state.message}
       onChange={(e) => this.setState({ message: e.target.value })}/>
      </div>
      <div className="form-group">
        <label htmlFor="textInput2">Description</label>
        <textarea className="form-control" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} rows="3" placeholder="Enter description"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Start Date</label>
        <input type="date" className="form-control" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} id="aptDate" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Age group</label>
        <select className="form-control" value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} id="exampleFormControlSelect1" >
          <option>Child</option>
          <option>Teen</option>
          <option>Adult</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">Level of play</label>
        <select value={this.state.level} onChange={(e) => this.setState({ level: e.target.value })} className="form-control" id="exampleFormControlSelect2">
          <option>Recreational</option>
          <option>Competitive</option>
        </select>
      </div>
      <div className="form-group">
      <label htmlFor="textInput2">Contact information</label>
      <input value={this.state.contact} onChange={(e) => this.setState({ contact: e.target.value })} type="text" className="form-control" id="textInput2" aria-describedby="emailHelp" placeholder="Contact" />
      </div>
      <input className="btn btn-md btn-dark btn-block" id="submit" type="submit" value="Submit" />
      </form>
      </div>
      </div>
    )
  }
}

export default MessageBox
