import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import { addUserAreaAsync } from '../../actions/area'
import './styles.css';

class OpenAreaList extends Component {
    onAreaClick(area){
        this.props.dispatch(addUserAreaAsync(area))
    }
    render() {
        var areas = this.props.areas
        var areaList = areas.map((o)=>{
            return (<div onClick={this.onAreaClick.bind(this, o)} className="area-list__item" key={o.id}>
                {o.name}
            </div>)
        })
        return (<div className="area-list">
            {areaList}
        </div>)
    }
}

export default OpenAreaList
