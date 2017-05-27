import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChannelList from '../../components/ChannelList'
import './styles.css';

class AreaPage extends Component {
    render() {
        return (
            <div className="wrap">
                <ChannelList channels={this.props.channels}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { channels: state.channels }
}

export default connect(mapStateToProps)(AreaPage)
