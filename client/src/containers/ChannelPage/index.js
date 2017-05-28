import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChannelInput from '../../components/ChannelInput'
import MessageList from '../../components/MessageList'
import { openChannel, closeChannel } from '../../api/sockets'

import './styles.css';

class ChannelPage extends Component {
    componentWillMount(){
        var channel = this.props.match.params.channel
        openChannel(channel)
    }
    componentWillUnmount(){
        closeChannel();
    }
    render() {
        var channel = this.props.match.params.channel
        var messages = this.props.messages.filter((o)=>{
            return o.channel == channel
        })
        for (var i = 0; i < messages.length; i++) {
            if(messages[i].user_id == this.props.user.id){
                messages[i].className = "msg--mine"
            } else {
                messages[i].className = ""
            }
        }
        return (
            <div className="wrap channel-page">
                <MessageList messages={messages} />
                <ChannelInput channel={channel}
                    user={this.props.user}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        user: state.user
    }
}

export default connect(mapStateToProps)(ChannelPage)
