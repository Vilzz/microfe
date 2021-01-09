import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
  })
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </Router>
  )
}

export default App
