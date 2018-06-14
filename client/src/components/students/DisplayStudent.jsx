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
  constructor(props) {
    super(props);
    this.state = {
      toBatch: false,
    };
  }


  render() {
    if (this.state.toBatch === true) {
      return <Redirect to='/studentOverview' />
    }

    const {currentStudent} = this.props
    
    return (
    
      <div>

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
          <button>add review</button>
          <button>edit student</button>
          <button>delete student</button>
        </div>
        <button>back</button>
      </div>
    
    )
  }
}

const mapStateToProps = ({currentStudent}) => {
  return {currentStudent}
}

export default connect(mapStateToProps,{giveSingleStudent})(DisplayStudent)
