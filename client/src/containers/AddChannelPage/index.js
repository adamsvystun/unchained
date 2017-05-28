import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
// import { addChannel } from '../../api/channel'
import Header from '../../components/Header'

class AddChannelPage extends Component {
    render() {
        return (<div className="app-wrap">
            <Header match={this.props.match}/>
            <div className="wrap">
                <div className="h">Add Channel</div>
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return { areas: state.areas }
}

export default connect(mapStateToProps)(AddChannelPage)
