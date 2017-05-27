import React, { Component } from 'react';
import { connect } from 'react-redux';
import AreaList from '../../components/AreaList'
import './styles.css';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            areas: []
        }
    }
    render() {
        return (
            <div className="wrap">
                <div>Your areas</div>
                <AreaList areas={this.props.areas} />
                <div>Open areas</div>
                <AreaList areas={this.state.areas} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { areas: state.areas }
}

export default connect(mapStateToProps)(HomePage)
