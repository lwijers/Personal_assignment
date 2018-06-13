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
import './DisplayBatch.css'

class DisplayBatch extends PureComponent {
  componentWillMount() {
    this.props.giveStudents()
  }



  render() {

    const {students} = this.props
    
    if (students === null) return null
    
    
    return (   
      <div className="outer-paper">
      <Typography variant="headline" component="h2">
          adgfd
      </Typography>
        {students.map((batch) => {
          return <InfoCard batch={batch}/>
        })
        } 
      </div>)
  }
} 


const mapStateToProps = ({students}) => {
  return {students}
}


export default connect(mapStateToProps, {giveStudents})(DisplayBatch)