import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {giveSingleStudent, setCurrentStudent} from '../../actions/students'
import './styling/studentCard.css'
// import {setCurrentStudent} from '../../actions/students'

class StudentCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          toStudent: false,
        };
      }
    


    handleClick(e) {
        this.props.setCurrentStudent(this.props.student)
        this.setState(() => ({
            toStudent: true
          }))
    }

    render() {

        const {student} = this.props

        if (student === null) return null
        
        if (this.state.toStudent === true) {
            return <Redirect to='/displayStudent' />
        }

        return ( 
            <div>
                <div 
                className="card-container"
                onClick={this.handleClick.bind(this)}
                >
                    
                    <div className='image-container'>
                        <div className="inner-image">
                            <img src={student.pictureURL} className="portrait-image"/> 
                        </div>
                        <div className="cardFooter">
                            <p className="name">{student.firstName}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, {setCurrentStudent})(StudentCard)
