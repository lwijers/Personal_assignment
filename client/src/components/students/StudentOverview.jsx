import React, {PureComponent} from 'react'
import {giveStudents, getRandomStudent} from '../../actions/students'
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

  handleAskRandom(e){
    let randomNumber = Math.random().toFixed(2)
    console.log(randomNumber)
    randomNumber <= 0.45 ?  this.props.getRandomStudent('red') 
    : randomNumber <= 0.80 ?  this.props.getRandomStudent('yellow') 
    : this.props.getRandomStudent('green') 
    window.alert('student to ask question:' + this.props.currentStudent.firstName + this.props.currentStudent.id)
  }

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
        <button onClick={this.handleAskRandom.bind(this)} >random question</button>
      </div>
      
    )
  }
} 


const mapStateToProps = ({students, currentBatch, currentStudent}) => {
  return {students, currentBatch, currentStudent}
}


export default connect(mapStateToProps, {giveStudents, getRandomStudent})(StudentOverview)
