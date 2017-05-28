import React, { Component } from 'react'
import { sendMessage } from '../../api/sockets'

import './styles.css'

class ChannelInput extends Component {
    onSend() {
        var input = document.getElementById("channel-input__input")
        if(input.value.length){
            sendMessage({
                text: input.value,
                pub_date: Date.now(),
                user: this.props.user.name,
                channel: this.props.channel,
                user_id: this.props.user.id
            })
        }
        input.value = ""
    }
    render() {
        return (<div className="channel-input">
            <div className="channel-input__wrap">
                <input type="text" id="channel-input__input" />
            </div>
            <div id="channel-input__submit" onClick={this.onSend.bind(this)}>
                Send
            </div>
        </div>)
    }
}

export default ChannelInput
