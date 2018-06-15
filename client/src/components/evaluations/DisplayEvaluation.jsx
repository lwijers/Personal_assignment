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
import './evaluationForm.css'

class DisplayEvaluation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toStudent: false
    }
  }
  componentWillMount() {
    this.props.giveEvaluation()
  }

  handleBack(e) {
    this.setState(() => ({
      toStudent: true
      }))
  }

  render() {
    if (this.props.evaluation === null) return null

    const {evaluation, currentStudent} = this.props
    
    if (this.state.toStudent === true) {
      return <Redirect to='/displayStudent' />
    }

    return (  
      <div> 
        <div>
          <h1>evaluation</h1>
        </div>
        <div>
          <p>student name: {currentStudent.firstName}&nbsp;{currentStudent.lastName}</p>
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
        <div className="remark">
          <i className="t">{evaluation.remark}</i>
        </div>
        <button onClick={this.handleBack.bind(this)}>back</button>         

      </div>
        
    )
  }
} 
const mapStateToProps = ({evaluation, currentStudent}) => {
  return {evaluation, currentStudent}
}

export default connect(mapStateToProps,{giveEvaluation})(DisplayEvaluation)