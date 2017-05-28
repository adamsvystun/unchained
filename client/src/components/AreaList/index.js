import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './styles.css';

class AreaList extends Component {
    render() {
        var areas = this.props.areas
        var areaList = areas.map((o, i)=>{
            return (<NavLink to={"/area/"+o.id} className="area-list__item" key={i}>
                {o.name}
            </NavLink>)
        })
        if(!areaList.length) {
            areaList = <div className="area-list__item" key={1}>
                You are not member of any area
            </div>
        }
        return (<div className="area-list">
            {areaList}
        </div>)
    }
}

export default AreaList
