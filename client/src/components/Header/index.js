import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import './styles.scss';

class Header extends Component {
    render() {
        var areaId = this.props.match.params.area
        var channelId = this.props.match.params.id
        var area, channel
        if(areaId){
            area = this.props.areas.find((o)=>{
                return o.id == areaId
            })
            
            area = (<NavLink to={"/area/"+areaId} className="header__nav-item" activeClassName="header__nav-item--selected">
                {area.name}</NavLink>)
        }
        if(channelId){
            channel = this.props.channels.find((o)=>{
                return o.id == channelId
            })
            channel = (<NavLink to={"/area/"+areaId+"/channel/"+channelId} className="header__nav-item" activeClassName="header__nav-item--selected">
                {channel.name}</NavLink>)
        }


        return (<div className="header">
            <div className="header__nav">
                <NavLink exact to="/" className="header__nav-item" activeClassName="header__nav-item--selected">
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
