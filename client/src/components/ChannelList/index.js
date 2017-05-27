import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

// import logo from './logo.svg';
import './styles.css';

class ChannelList extends Component {
    render() {
        var channels = this.props.channels
        var area = this.props.area
        var channelList = channels.map((o)=>{
            return (<NavLink to={"/area/"+area+"/channel/"+o.id} className="channel-list__item" key={o.id}>
                {o.name}
            </NavLink>)
        })
        return (<div className="channel-list">
            {channelList}
        </div>)
    }
}

export default ChannelList
