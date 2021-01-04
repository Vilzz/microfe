import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'
import Landing from './components/Landing'
import Pricing from './components/Pricing'

const App = () => {
  return (
    <div>
      <StylesProvider>
        <Router>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route exact path='/' component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}

export default App
