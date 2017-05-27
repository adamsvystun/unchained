import React, { Component } from 'react';
import ChannelList from '../../components/ChannelList'

import './styles.css';

class AreaPage extends Component {
    render() {
        return (
            <div className="wrap">
                AreaPage
                <ChannelList />
            </div>
        );
    }
}

export default AreaPage;
