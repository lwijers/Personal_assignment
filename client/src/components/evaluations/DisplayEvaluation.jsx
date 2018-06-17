import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {giveBatches} from '../../actions/batches'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import {giveEvaluation} from '../../actions/evaluations'
import './evaluationForm.css'

class DisplayEvaluation extends PureComponent {

  componentWillMount() {
    this.props.giveEvaluation()
  }


  render() {
    if (this.props.currentEvaluation === null) return null

    const {currentEvaluation, currentStudent} = this.props


    return (  
      <div> 
        <div>
          <h1>evaluation</h1>
        </div>
        <div>
          <p>student name: {currentStudent.firstName}&nbsp;{currentStudent.lastName}</p>
        </div>
        <div>
          <p>date:&nbsp;{currentEvaluation.date}</p>
        </div>
        <div>
          <p>score:&nbsp;{currentEvaluation.score}</p>
        </div>
        <div>
          <p>remark:</p>
        </div>
        <div className="remark">
          <i className="t">{currentEvaluation.remark}</i>
        </div>
        <Link to={`/student`} style={{textDecoration: 'none'}}>
          <button>back</button>         
        </Link>
      </div>
        
    )
  }
} 
const mapStateToProps = ({currentEvaluation, currentStudent}) => {
  return {currentEvaluation, currentStudent}
}

export default connect(mapStateToProps,{giveEvaluation})(DisplayEvaluation)