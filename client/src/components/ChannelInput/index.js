import React, { Component } from 'react'
import { send } from '../../api/sockets'

import './styles.css'

class ChannelInput extends Component {
    onSend() {
        var input = document.getElementById("channel-input__input")
        console.log(input.value)
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
