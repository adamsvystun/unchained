import React, { Component } from 'react';
import ChannelInput from '../../components/ChannelInput'
import MessageList from '../../components/MessageList'

import './styles.css';

class ChannelPage extends Component {
    render() {
        return (
            <div className="wrap channel-page">
                <MessageList />
                <ChannelInput />
            </div>
        );
    }
}

export default ChannelPage;
