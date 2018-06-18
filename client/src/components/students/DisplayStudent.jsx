import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {giveSingleStudent, setStudentTotalScore, deleteStudent} from '../../actions/students'
import {giveEvalByStud} from '../../actions/evaluations'

import './styling/student.css'

class DisplayStudent extends PureComponent {

  componentWillMount() {

    this.props.giveEvalByStud(this.props.currentStudent.id)
  }

  handleDeleteStudent(e) {
    this.props.deleteStudent(this.props.currentStudent.id)
    this.setState({
      redirect: true
    })
  }

  handleAddEvaluation(e) {
    this.props.setStudentTotalScore(this.calculateScore())
  }

  calculateScore() {
    let i = 0
    this.props.studentEvaluations.map((evaluation) => {
      i += evaluation.score
    })
    return i
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
            <button onClick={this.handleAddEvaluation.bind(this)}>Add Evaluation</button>
          </Link>
          <Link to={`/classes`} style={{textDecoration: 'none'}}>
            <button>Edit Student</button>
          </Link>
          <Link to={`/classes`} style={{textDecoration: 'none'}}>
            <button onClick={this.handleDeleteStudent.bind(this)}>Delete Student</button>
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

export default connect(mapStateToProps,{deleteStudent, giveSingleStudent, giveEvalByStud, setStudentTotalScore})(DisplayStudent)
