import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import huddle from './the-huddle.png';
import firebase from 'firebase';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    aptBodyVisible: true
  }
  var config = {
      apiKey: "AIzaSyCLheIAxLWUnOuykf16ZEoLCLLvZiYSS5E",
      authDomain: "react-test-f88ad.firebaseapp.com",
      databaseURL: "https://react-test-f88ad.firebaseio.com",
      projectId: "react-test-f88ad",
      storageBucket: "react-test-f88ad.appspot.com",
      messagingSenderId: "552248336160"
    };
  firebase.initializeApp(config);
}

  render() {
    return (
      <div className="container-fluid">
            <Header title="Simple Firebase App"/>
              <MessageList db={firebase} />
              <MessageBox value={this.state.aptBodyVisible} db={firebase} />
          <img id="the-huddle" src={huddle} alt="the-huddle" width="90"/>
        </div>
    );
  }
}


export default App;
