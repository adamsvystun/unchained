import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

// import logo from './logo.svg';
import './styles.css';
import chevron from './chevron.svg'
class ChannelList extends Component {
    render() {
        var channels = this.props.channels
        var area = this.props.area
        var channelList = channels.map((o, i)=>{
            return (<NavLink to={"/area/"+area+"/channel/"+o.id}
                className={"channel-list__item"} key={i}>
                <div></div>
                <div>{o.name}</div>
                <img src={chevron} className="channel-list__add-icon" alt="logo" />
            </NavLink>)
        })
        return (<div className="channel-list">
            {channelList}
        </div>)
    }
}

export default ChannelList
