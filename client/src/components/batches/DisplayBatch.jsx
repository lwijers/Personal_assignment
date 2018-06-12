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
import InfoCard from '../layout/InfoCard'
import './DisplayBatch.css'

class DisplayBatch extends PureComponent {
  componentWillMount() {
    this.props.giveBatches()
  }



  render() {

    const {batches} = this.props
    
    if (batches === null) return null
    
    console.log(batches[0], 'lennnn')

    return (   
      <Paper className="outer-paper">
      <Typography variant="headline" component="h2">
          Your Batches:
        </Typography>
        {batches.map((batch) => {
          return <InfoCard batch={batch}/>
        })
        }
        
        
      </Paper>)
  }
} 


const mapStateToProps = ({batches}) => {
  return {batches}
}


export default connect(mapStateToProps, {giveBatches})(DisplayBatch)
