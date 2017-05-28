import React, { Component } from 'react';
import { connect } from 'react-redux';
import AreaList from '../../components/AreaList'
import OpenAreaList from '../../components/OpenAreaList';
import './styles.css';
import { findArea } from '../../api/area'
import Header from '../../components/Header'


class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            areas: [],
            locations: null
        }
        this.getLocation()
    }
    handleAreas(areas){
        this.setState({areas: areas})
    }
    consumeLocation(o){
        findArea({
            lat: o.coords.latitude,
            long: o.coords.longitude
        }).then((res)=>{
            this.handleAreas(res.data)
        })
        this.setState({loc: o})
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.consumeLocation.bind(this))
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }
    render() {
        var areas = this.state.areas.filter((o)=>{
            for (var i = 0; i < this.props.areas.length; i++) {
                if(this.props.areas[i].id == o.id){
                    return false
                }
            }
            return true
        })
        var location = ""
        return (<div className="app-wrap">
            <Header match={this.props.match}/>
            <div className="wrap">

                <div className="h">Your areas</div>
                <AreaList areas={this.props.areas} />
                <div className="h">Open areas</div>
                <OpenAreaList dispatch={this.props.dispatch } areas={areas} />
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return { areas: state.areas }
}

export default connect(mapStateToProps)(HomePage)
