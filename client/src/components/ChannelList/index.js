import React, { Component } from 'react';

// import logo from './logo.svg';
import './styles.scss';

class ChannelList extends Component {
    render() {
        var channels = this.props.channels
        var channelList = channels.map((o)=>{
            return (<div className="channel-list__item" key={o.id}>{o.name}</div>)
        })
        return (<div className="channel-list">
            {channelList}
        </div>)
    }
}

export default ChannelList
