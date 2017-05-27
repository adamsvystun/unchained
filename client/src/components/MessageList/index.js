import React, { Component } from 'react'

import './styles.css'

class MessageList extends Component {
    render() {
        var messages = this.props.messages
        var messagesList;
        if(messages){
            messagesList = messages.map((o)=>{
                return (<div key={o.id} className="message__row">
                    <div className="message">{o.text}</div>
                </div>)
            })
        }
        return (<div className="messages-list">
            {messagesList}
        </div>)
    }
}

export default MessageList
