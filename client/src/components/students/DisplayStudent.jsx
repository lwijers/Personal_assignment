import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {giveSingleStudent} from '../../actions/students'
import {giveEvalByStud} from '../../actions/evaluations'

import './styling/student.css'

class DisplayStudent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toAddEvaluation: false,
      toBatch: false,
      toEvaluation: false
    };
  }

  componentWillMount() {
    this.props.giveEvalByStud(this.props.currentStudent.id)
  }


  handleAddEvaluation(e) {
    this.setState(() => ({
      toAddEvaluation: true
    }))
  }

  handleBackClick(e) {
    this.setState(() => ({
      toBatch: true
    }))
  }

  handleDeleteStudent(e) {
  
  }

  handleToEvaluation(e) {
    this.setState(() => ({
      toEvaluation: true
    }))
  }

  renderScore(score, date){
    const month =  date.slice(8,10)
    const day = date.slice(5,7)

    let scoreTable = {1:"red", 2:"yellow", 3:"green"}
    return (
      <div >
        <div 
        className="scoreDisplay" 
        id={scoreTable[score]} 
        onClick={this.handleToEvaluation.bind(this)}
        >
        </div>
        <div>{day}/{month}</div>
      </div>
    )
  }


  render() {
    if (this.state.toAddEvaluation === true) {
      return <Redirect to='/addEvaluation' />
    } else if (this.state.toBatch === true) {
      return <Redirect to='/studentOverview' />
    } else if (this.state.toEvaluation === true) {
      return <Redirect to='/displayEvaluation' />
    }


    const {currentStudent, studentEvaluations} = this.props

    
    if (studentEvaluations === null) return null

    return (
    
      <div>
        <h1>Student Details</h1>
        <div className="outer-div">
          <div className='image'>
          <img src={currentStudent.pictureURL} className="portrait-image"/> 
          </div>
          <div>
            <p>Name: &nbsp;{currentStudent.firstName}&nbsp;{currentStudent.lastName}</p>

            <p>ratings:</p>
          </div>
          <div className="scoreContainer">
            {studentEvaluations.map((evaluation) => {
              return this.renderScore(evaluation.score, evaluation.date)
            })}
          </div>
        </div>
        <div>
          <button
          onClick={this.handleAddEvaluation.bind(this)}
          >add evaluation</button>
          
          <button>edit student</button>
          
          <button
          onClick={this.handleDeleteStudent.bind(this)}
          >delete student</button>
        </div>
        <button
        onClick={this.handleBackClick.bind(this)}
        >back</button>
      </div>
    
    )
  }
}

const mapStateToProps = ({currentStudent, studentEvaluations}) => {
  return {currentStudent, studentEvaluations}
}

export default connect(mapStateToProps,{giveSingleStudent, giveEvalByStud})(DisplayStudent)
