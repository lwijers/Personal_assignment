import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {giveSingleStudent} from '../../actions/students'
import {giveEvalByStud} from '../../actions/evaluations'

import './styling/student.css'

class DisplayStudent extends PureComponent {

  componentWillMount() {

    this.props.giveEvalByStud(this.props.currentStudent.id)
  }

  handleDeleteStudent(e) {
  
  }



  renderScore(score, date){
    const month =  date.slice(8,10)
    const day = date.slice(5,7)

    const scoreTable = {1:"red", 2:"yellow", 3:"green"}
    return (
      <div>
        <Link to={`/evaluation`} style={{textDecoration: 'none'}}>
          <div 
          className="scoreDisplay" 
          id={scoreTable[score]} 
          >
          </div>
          </Link>

          <div>
            {day}/{month}
          </div>

      </div>
    )
  }


  render() {
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
          <Link to={`/evaluation/createNew`} style={{textDecoration: 'none'}}>
            <button>Add Evaluation</button>
          </Link>
          <Link to={`/classes`} style={{textDecoration: 'none'}}>
            <button>Edit Student</button>
          </Link>
          <Link to={`/classes`} style={{textDecoration: 'none'}}>
            <button>Delete Student</button>
          </Link>
        </div>
        <Link to={`/class`} style={{textDecoration: 'none'}}>
          <button>Back</button>
        </Link>
      </div>
    
    )
  }
}

const mapStateToProps = ({currentStudent, studentEvaluations}) => {
  return {currentStudent, studentEvaluations}
}

export default connect(mapStateToProps,{giveSingleStudent, giveEvalByStud})(DisplayStudent)
