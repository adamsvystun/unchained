import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux';


import HomePage from './containers/HomePage'
import AreaPage from './containers/AreaPage'
import ChannelPage from './containers/ChannelPage'
import AddChannelPage from './containers/AddChannelPage'

import { addAreaFetchChannels } from './actions/area'
import { fetchUser } from './actions/user'
import { getUser } from './api/area'

class App extends Component {
    componentWillMount(){
        getUser().then((res)=>{
            this.props.dispatch(fetchUser({
                id: res.data.id,
                name: res.data.name
            }))
            res.data.areas.forEach((area)=>{
                this.props.dispatch(addAreaFetchChannels(area))
            })
        })
    }
    render(){
        return (
        <Router>
            <div className="router-wrap">
                <Route exact strict path="/" component={HomePage}/>
                <Route exact path="/area/:area" component={AreaPage}/>
                <Route exact path="/area/:area/channel/:channel" component={ChannelPage}/>
                <Route exact path="/area/:area/addchannel" component={AddChannelPage}/>
            </div>
        </Router>
        )
    }
}
export default connect()(App)
