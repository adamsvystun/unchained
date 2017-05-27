import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux';

import Header from './components/Header'
import HomePage from './containers/HomePage'
import AreaPage from './containers/AreaPage'
import ChannelPage from './containers/ChannelPage'

import { addAreaAsync } from './actions/area'
import { getUserAreas } from './api/area'

const Home = ({match}) => (<div className="app-wrap">
    <Header match={match}/>
    <HomePage match={match}/>
</div>)
const Area = ({match}) => (<div className="app-wrap">
    <Header match={match}/>
    <AreaPage match={match}/>
</div>)
const Channel = ({match}) => (<div className="app-wrap">
    <Header match={match}/>
    <ChannelPage match={match}/>
</div>)
class App extends Component {
    componentWillMount(){
        getUserAreas().then((res)=>{
            console.log(res.data)
            res.data.forEach((o)=>{
                this.props.dispatch(addAreaAsync(o))
            })
        })
    }
    render(){
        return (
        <Router>
            <div className="router-wrap">
                <Route exact strict path="/" component={Home}/>
                <Route exact path="/area/:area" component={Area}/>
                <Route exact path="/area/:area/channel/:channel" component={Channel}/>
            </div>
        </Router>
        )
    }
}
export default connect()(App)
