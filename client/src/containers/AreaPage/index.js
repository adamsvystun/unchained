import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import ChannelList from '../../components/ChannelList'
import './styles.css';
import Header from '../../components/Header'
import add from './add.svg'
class AreaPage extends Component {
    render() {
        var area = this.props.match.params.area
        var channels = this.props.channels.filter((o)=>{
            return o.area == area
        })
        return (<div className="app-wrap">
            <Header match={this.props.match}/>
            <div className="wrap area-page">
                <ChannelList channels={channels} area={area}/>
                <NavLink to={"/area/"+area+"/addchannel"}
                    className="area-page__add-channel"><img src={add} className="area-list__add" alt="logo" /></NavLink>
            </div>
        </div>

        );
    }
}

function mapStateToProps(state) {
    return { channels: state.channels }
}

export default connect(mapStateToProps)(AreaPage)
