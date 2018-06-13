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


  renderStudent() {
    const {students} = this.props
    console.log(this.props)
    return (
      <div>
        <StudentCard student={this.props.students[0]}/>
                    
        <div>
            <button onClick={this.handleAddStudent.bind(this)} >add student</button>
        </div>
      </div>
    )
  }



  render() {

    if (this.state.toAddStudent === true) {
      return <Redirect to='/addStudent' />
  }

    const {students} = this.props
    
    if (students === null) return null



    
    return (   
      <div className="outer-paper">
        <div>
          <h1>Student Overview</h1>
          <h2>Batch:</h2>
        </div>
        <div>
          {this.renderStudent()}
        </div>
      
      </div>
      
    )
  }
} 


const mapStateToProps = ({students}) => {
  return {students}
}


export default connect(mapStateToProps, {giveStudents})(StudentOverview)
