import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './styles.scss';

class ChannelList extends Component {
    render() {
        var channels = this.props.channels
        var channelList = channels.map((o)=>{
            return (<div key={o.id}>{o.name}</div>)
        })
        return (<div className="channel-list">
            ChannelList
            {channelList}
        </div>)
    }
}

function mapStateToProps(state) {
  return { channels: state.channels }
}

export default connect(mapStateToProps)(ChannelList)
