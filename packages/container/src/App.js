import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </Router>
  )
}

export default App
