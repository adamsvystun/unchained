import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChannelList from '../../components/ChannelList'
import './styles.css';

class AreaPage extends Component {
    render() {
        var area = this.props.match.params.id
        var channels = this.props.channels.filter((o)=>{
            return o.area == area
        })
        return (
            <div className="wrap">
                <ChannelList channels={channels} area={area}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { channels: state.channels }
}

export default connect(mapStateToProps)(AreaPage)
