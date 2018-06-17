import React, {PureComponent} from 'react'
import {giveStudents} from '../../actions/students'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import StudentCard from './StudentCard'

class StudentOverview extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       scoreTally = {}       
//     };
// }

  componentDidMount() { 
    if (this.props.students === null) {
      this.props.giveStudents(this.props.currentBatch.id)
    }
    // this.calculateScores()  
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

  handleGiveRandom(e){
    // askRandom()
  }

  // calculateScores() {
  //   console.log('students in overview', this.props.students)
  //   students.map((student) => {
  //     student.evaluations
  //   })
  // }

  render() {

    const {students} = this.props
    
    if (students === null) return null


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
          <Link to={`/student/createNew`} style={{textDecoration: 'none'}}>
            <button onClick={this.handleAddStudent.bind(this)} >add student</button>
          </Link>
        </div>
        <div>
          <Link to={`/classes`} style={{textDecoration: 'none'}}>
            <button onClick={this.handleBack.bind(this)} >back</button>
          </Link>
          
        </div>
        <button onClick={this.handleGiveRandom.bind(this)} >random question</button>
      </div>
      
    )
  }
} 


const mapStateToProps = ({students, currentBatch}) => {
  return {students, currentBatch}
}


export default connect(mapStateToProps, {giveStudents})(StudentOverview)
