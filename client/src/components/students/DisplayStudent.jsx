import React, {PureComponent} from 'react'
import {getGames, createGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'


class DisplayStudent extends PureComponent {


  render() {
    console.log(this.props)
    return (
    
      <Paper className="outer-paper">
        asdafadf
      </Paper>)
  }
}

export default DisplayStudent
