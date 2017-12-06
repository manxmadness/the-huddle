import React, {Component} from 'react';
import Message from './Message';
import ReactDraggable from 'react-draggable';
import _ from 'lodash';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };

    let app = this.props.db.database().ref('messages');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values){
    let messagesVal = values;
    let messages = _(messagesVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(messagesVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;

                      })
                      .value();
      this.setState({
        messages: messages
      });
  }

  render() {
    let messageNodes = this.state.messages.map((message) => {
      return (
        <ReactDraggable>
          <div>
            <Message
            message = {message.message}
            description = {message.description}
            contact = {message.contact}
            age = {message.age}
            date = {message.date}
            level = {message.level} />
          </div>
        </ReactDraggable>
      )
    });
    return (
      <div>
        {messageNodes}
      </div>
    );
  }
}

export default MessageList
