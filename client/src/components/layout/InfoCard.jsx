import React, {PureComponent} from 'react'
import {getGames, createGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {giveBatches} from '../../actions/batches'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './InfoCard.css'

class InfoCard extends PureComponent {
//   componentWillMount() {

//   }

  render() {
    const {batch} = this.props
    console.log(batch, 'lenn22222')
    return (
    
      <Card className="info-card" >
        <Typography variant="headline" component="h2">
          <h2>Batch:&nbsp;{batch.id}</h2>
        </Typography>
        <Typography>
          start date: {batch.startDate}
          end date: {batch.endDate}
        </Typography>
    </Card>
    )
  }
} 


const mapStateToProps = state => ({
  authenticated: state.currentUser !== null
})


export default InfoCard
