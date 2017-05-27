import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/Header'
import HomePage from './containers/HomePage'
import AreaPage from './containers/AreaPage'
import ChannelPage from './containers/ChannelPage'

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
const App = (props) => {
    return (
    <Router>
        <div className="router-wrap">
            <Route exact path="/" component={Home}/>
            <Route exact path="/area/:id" component={Area}/>
            <Route exact path="/area/:area/channel/:id" component={Channel}/>
        </div>
    </Router>
    )
}
export default App
