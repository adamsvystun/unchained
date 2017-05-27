import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChannelInput from '../../components/ChannelInput'
import MessageList from '../../components/MessageList'

import './styles.css';

class ChannelPage extends Component {
    render() {
        var channel = this.props.match.params.channel
        var messages = this.props.messages.filter((o)=>{
            return o.channel == channel
        })
        return (
            <div className="wrap channel-page">
                <MessageList messages={messages} />
                <ChannelInput />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { messages: state.messages }
}

export default connect(mapStateToProps)(ChannelPage)
