import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import './App.css'
import TopBar from './components/layout/TopBar'
import DisplayStudent from './components/students/DisplayStudent'
import StudentOverview from './components/students/StudentOverview'
import Classes from './components/batches/BatchOverview'
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
            <Route exact path="/" render={ () => <Redirect to="classes" /> } />
            
            <Route exact path="/classes" component={Classes} />

            <Route exact path="/class" component={StudentOverview} />
            <Route exact path="/classes/createNew" component={AddBatch} />

            <Route exact path="/student" component={DisplayStudent} />
            <Route exact path="/student/createNew" component={AddStudent} />
            
            <Route exact path="/evaluation" component={DisplayEvaluation} />
            <Route exact path="/evaluation/createNew" component={AddEvaluation} />

            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />

          </main>
        </div>
      </Router>
    )
  }
}
export default App

