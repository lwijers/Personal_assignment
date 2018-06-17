import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {setCurrentStudent} from '../../actions/students'
import './styling/studentCard.css'


class StudentCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          toStudent: false,
        };
      }
    


    handleClick(e) {
        this.props.setCurrentStudent(this.props.student)
    }

    render() {

        const {student} = this.props

        if (student === null) return null

        return ( 
            <Link to={`/student`} style={{textDecoration: 'none'}}>
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
            </Link>
        )
    }
}


export default connect(null, {setCurrentStudent})(StudentCard)
