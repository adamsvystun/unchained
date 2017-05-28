import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import { addUserAreaAsync } from '../../actions/area'
import './styles.css';
import add from './add.svg'
class OpenAreaList extends Component {
    onAreaClick(area){
        this.props.dispatch(addUserAreaAsync(area))
    }
    render() {
        var areas = this.props.areas
        var areaList = areas.map((o)=>{
            return (<div onClick={this.onAreaClick.bind(this, o)} className="area-list__item" key={o.id}>
                <div></div>
                <div>{o.name}</div>
                <img src={add} className="area-list__add-icon" alt="logo" />
            </div>)
        })
        if(!areaList.length) {
            areaList = <div className="area-list__item" key={1}>
                No open areas around
            </div>
        }
        return (<div className="area-list">
            {areaList}
        </div>)
    }
}

export default OpenAreaList
