import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import GamesList from './components/games/GamesList'
import GameDetails from './components/games/GameDetails'
import LogoutPage from './components/logout/LogoutPage'
import './App.css'
import TopBar from './components/layout/TopBar'
import DisplayStudent from './components/students/DisplayStudent'
import DisplayBatch from './components/batches/DisplayBatch'
import BatchOverview from './components/batches/BatchOverview'
import AddBatch from './components/batches/AddBatch'
import AddStudent from './components/students/AddStudent'
import DisplayEvaluation from './components/evaluations/DisplayEvaluation'
import AddEvaluation from './components/evaluations/AddEvaluation'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/" component={BatchOverview} />
            <Route exact path="/createBatch" component={AddBatch} />
            <Route exact path="/addStudent" component={AddStudent} />
            <Route exact path="/displayStudent" component={DisplayStudent} />
            <Route exact path="/displayBatch" component={DisplayBatch} />
            <Route exact path="/displayEvaluation" component={DisplayEvaluation} />
            <Route exact path="/addEvaluation" component={AddEvaluation} />
          </main>
        </div>
      </Router>
    )
  }
}
export default App


// <Route exact path="/login" component={LoginPage} />
// <Route exact path="/logout" component={LogoutPage} />
// <Route exact path="/signup" component={SignupPage} />
// <Route exact path="/games" component={GamesList} />
// <Route exact path="/games/:id" component={GameDetails} />
// <Route exact path="/" render={ () => <Redirect to="/games" /> } />