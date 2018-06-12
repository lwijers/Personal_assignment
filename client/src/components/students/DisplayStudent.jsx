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
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.games === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }


  render() {

    console.log(this.props)
    return (
    
      <Paper className="outer-paper">
        {String(this.props.authenticated)}
      </Paper>)
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null
})


export default connect(mapStateToProps)(DisplayStudent)
