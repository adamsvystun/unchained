import React, { Component } from 'react'

import './styles.scss'

class ChannelInput extends Component {
    onSend() {
        var msg = document.getElementById("channel-input__input").value
        console.log(msg)
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
