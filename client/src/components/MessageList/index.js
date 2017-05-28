import React, { Component } from 'react'

import './styles.css'

class MessageList extends Component {
    constructor(props){
        super(props)
        this.state = {
            scrolling: false
        }

    }
    updateScroll(){
        var msglist = document.getElementById("message-list");
        if(!this.state.scrolling){
            msglist.scrollTop = msglist.scrollHeight;
        } else {

            if(msglist.scrollHeight - msglist.offsetHeight === msglist.scrollTop){
                this.setState({scrolling: false})
            }
        }
    }
    onScroll(){
        this.setState({scrolling: true})
    }
    componentDidMount(){
        this.__update_scroll = setInterval(this.updateScroll.bind(this) , 100);
    }
    componentWillUnmount(){
        clearInterval(this.__update_scroll)
    }
    render() {
        var messages = this.props.messages
        var messagesList;
        if(messages){
            messagesList = messages.map((o, i)=>{
                return (<div key={i} className={"message__row "+o.className}>
                    <div className="message">{o.text}</div>
                </div>)
            })
        }
        return (<div onScroll={this.onScroll.bind(this)}
                className="messages-list" id="message-list">
            {messagesList}
        </div>)
    }
}

export default MessageList
