import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {giveBatches} from '../../actions/batches'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import InfoCard from '../layout/InfoCard'
import {giveEvaluation} from '../../actions/evaluations'


class DisplayEvaluation extends PureComponent {
  componentWillMount() {
    this.props.giveEvaluation()
  }


  render() {
    if (this.props.evaluation === null) return null

    const {evaluation} = this.props
    
    return (  
      <div> 
        <div>
          <h1>evaluation</h1>
        </div>
        <div>
          <p>student name:</p>
        </div>
        <div>
          <p>date:&nbsp;{evaluation.date}</p>
        </div>
        <div>
          <p>score:&nbsp;{evaluation.score}</p>
        </div>
        <div>
          <p>remark:</p>
        </div>
        <div>
          {evaluation.remark}
        </div>
        <button>back</button>         

      </div>
        
    )
  }
} 
const mapStateToProps = ({evaluation}) => {
  return {evaluation}
}

export default connect(mapStateToProps,{giveEvaluation})(DisplayEvaluation)