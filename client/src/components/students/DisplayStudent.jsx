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
      toBatch: false
    };
  }

  componentWillMount() {
    this.props.giveEvalByStud(this.props.currentStudent.id)
    // console.log()
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

  render() {
    if (this.state.toAddEvaluation === true) {
      return <Redirect to='/addEvaluation' />
    } else if (this.state.toBatch === true) {
      return <Redirect to='/studentOverview' />
    }


    const {currentStudent} = this.props
    
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
        </div>
        <div>
          <button
          onClick={this.handleAddEvaluation.bind(this)}>add evaluation</button>
          <button>edit student</button>
          <button>delete student</button>
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
