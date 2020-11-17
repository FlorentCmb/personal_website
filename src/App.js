// Librairies import
import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Screens
import ProfessionalBackground from './screens/ProfessionalBackground'
// Components
import Banner from './components/Banner'
import Navbar from './components/Navbar'
// Style
import './App.css'

const App = () => {
  return (
    <main className="App">
      <Banner />
      <Navbar />
      <Switch>
        <Route exact path="/professional-background">
          <ProfessionalBackground />
        </Route>
      </Switch>
    </main>
  )
}

export default App