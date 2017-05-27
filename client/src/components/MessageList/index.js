import React, { Component } from 'react'

import './styles.scss'

class MessageList extends Component {
    render() {
        var messages = this.props.messages
        var messagesList;
        if(messages){
            messagesList = messages.map((o)=>{
                return (<div>{o.text}</div>)
            })
        }
        return (<div className="messages-list">
            {messagesList}
        </div>)
    }
}

export default MessageList
