import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import huddle from './the-huddle.png';
import firebase from 'firebase';
import dotenv from 'dotenv';
dotenv.config()

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    aptBodyVisible: true
  }
  var config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DB_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_SENDER_ID
    };
  firebase.initializeApp(config);
}

  render() {
    return (
      <div className="container-fluid">
            <Header/>
              <MessageList db={firebase} />
              <MessageBox value={this.state.aptBodyVisible} db={firebase} />
          <img id="the-huddle" src={huddle} alt="the-huddle" width="90"/>
        </div>
    );
  }
}



export default App;
