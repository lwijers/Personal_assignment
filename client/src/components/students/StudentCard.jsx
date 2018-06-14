import React, {PureComponent} from 'react'
import {getGames, createGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {giveSingleStudent} from '../../actions/students'
import './styling/studentCard.css'

class StudentCard extends PureComponent {
  componentWillMount() {
  }

  render() {

    const {student} = this.props

    if (student === null) return null
    
    return ( 
        <div>
            <div className="card-container">
                
                <div className='image-container'>
                <img src={student.pictureURL} className="portrait-image"/> 
                </div>
                
                <div>
                <p>Name: &nbsp;{student.firstName}&nbsp;{student.lastName}</p>
                 <p>ratings:</p>
                </div>          
            
            </div>

        </div>
        
    
    )
  }
}


export default StudentCard
