import React, { Component } from 'react';
import { connect } from 'react-redux';
import AreaList from '../../components/AreaList'
import './styles.css';
import { findArea } from '../../api/area'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            areas: [],
            locations: null
        }
        this.getLocation()
    }
    consumeLocation(o){
        findArea({
            lat: o.coords.latitude,
            long: o.coords.longitude
        }).then((res)=>{
            console.log(res)
        })
        this.setState({loc: o})
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.consumeLocation.bind(this))
        } else {
            console.log("Geolocation is not supported by this browser.")
        }
    }
    render() {
        var location = ""
        if(this.state.loc){
            location = this.state.loc.coords.longitude
            location += "/"+this.state.loc.coords.latitude
        }
        return (
            <div className="wrap">
                <div>Your areas</div>
                <AreaList areas={this.props.areas} />
                <div>Open areas</div>
                <AreaList areas={this.state.areas} />
                {location}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { areas: state.areas }
}

export default connect(mapStateToProps)(HomePage)
