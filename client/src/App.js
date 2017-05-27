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

const App = () => (
<Router>
    <div>
        <Header />
        <Route exact path="/" component={HomePage}/>
        <Route path="/area/:id" component={AreaPage}/>
        <Route path="/channel/:id" component={ChannelPage}/>
    </div>
</Router>
)
export default App
