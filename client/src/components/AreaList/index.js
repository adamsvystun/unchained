import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles.scss';

class AreaList extends Component {
    render() {
        var areas = this.props.areas
        var areaList = areas.map((o)=>{
            return (<div className="area-list__item" key={o.id}>{o.name}</div>)
        })
        return (<div className="area-list">
            {areaList}
        </div>)
    }
}

export default AreaList
