import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {giveSingleStudent} from '../../actions/students'
import './styling/student.css'

class DisplayStudent extends PureComponent {
  componentWillMount() {
    this.props.giveSingleStudent()
  }

  render() {
    const {students} = this.props

    if (students === null) return null

    return (
    
      <div>

        <div className="outer-div">
          <div className='image-container'>
          {console.log(this.props)}
          <img src={this.props.students.pictureURL} className="portrait-image"/> 
          </div>
          <div>
            <p>Name: &nbsp;{students.firstName}&nbsp;{students.lastName}</p>
            <p>email: &nbsp; {students.email}</p>
            <p>ratings:</p>
          </div>
        </div>
        <div>
          <button>add review</button>
        </div>
      </div>
    
    )
  }
}

const mapStateToProps = ({students}) => {
  return {students}
}

export default connect(mapStateToProps,{giveSingleStudent})(DisplayStudent)
