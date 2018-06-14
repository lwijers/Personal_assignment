import React, {PureComponent} from 'react'
import {getGames, createGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {giveStudents} from '../../actions/students'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import InfoCard from '../layout/InfoCard'
import StudentCard from './StudentCard'

class StudentOverview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toCreateStudent: false,
      toBatches: false
    };
  }


  componentWillMount() {
    this.props.giveStudents()
  }

  handleAddStudent(e) {
    this.setState(() => ({
      toAddStudent: true
    }))
  }

  handleBack(e) {
    this.setState(() => ({
      toBatches: true
    }))
  }

  render() {

    if (this.state.toAddStudent === true) {
      return <Redirect to='/addStudent' />
    } else if (this.state.toBatches === true) {
      return <Redirect to='/batchoverview' />
    }

    const {students} = this.props
    
    if (students === null) return null



    console.log(students)
    return (   
      <div className="outer-paper">
        <div>
          <h1>Student Overview</h1>
          <h2>Batch: </h2>
        </div>
        <div>
          {students.map((student) => {
            return(
              <StudentCard student={student}/>
            )
          })}
        </div>
        <div>
            <button onClick={this.handleAddStudent.bind(this)} >add student</button>
        </div>
        <div>
            <button onClick={this.handleBack.bind(this)} >back</button>
        </div>
      </div>
      
    )
  }
} 


const mapStateToProps = ({students}) => {
  return {students}
}


export default connect(mapStateToProps, {giveStudents})(StudentOverview)
