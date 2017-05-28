import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import './styles.css';
import chevron from './chevron.svg'
class Header extends Component {
    render() {
        var areaId = this.props.match.params.area
        var channelId = this.props.match.params.channel
        var area, channel
        if(areaId){
            area = this.props.areas.find((o)=>{
                return o.id == areaId
            })
            if(area){
                area = [<img src={chevron} className="header__nav-chevron" alt="chevron" />,
                <NavLink to={"/area/"+areaId} className="header__nav-item">
                    {area.name}</NavLink>]
            } else {
                area = null
            }
        }
        if(channelId){
            channel = this.props.channels.find((o)=>{
                return o.id == channelId
            })
            if(channel){
                channel = [<img src={chevron} className="header__nav-chevron" alt="chevron" />,
                    <NavLink to={"/area/"+areaId+"/channel/"+channelId} className="header__nav-item">
                    {channel.name}</NavLink>]
            } else {
                channel = null
            }
        }


        return (<div className="header">
            <div className="header__nav">
                <NavLink exact to="/" className="header__nav-item">
                    Areas</NavLink>
                {area}
                {channel}
            </div>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        areas: state.areas,
        channels: state.channels
    }
}

export default connect(mapStateToProps)(Header)
