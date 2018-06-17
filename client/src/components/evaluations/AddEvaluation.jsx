import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {giveBatches} from '../../actions/batches'
import {addEvaluation} from '../../actions/evaluations'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button'
import './evaluationForm.css'


class AddEvaluation extends PureComponent {
  constructor(props) {

    super(props);
    this.state = {
      currentDate: new Date().toISOString().slice(0,10),

      selectedBox: "",
      score: 0,
      remark: "",
      scoreBoxes: {
        red: true,
        yellow: false,
        green: false
      },
    }
  }


  handleScoreBox(e)  {
    const i = e.target.id
    this.setState(() => ({
      selectedBox: i
      }))
  }

  handleDateChange(e) {
    const i = e.target.value
    this.setState(() => ({
      currentDate: i
      }))
  }

  handleRemarkChange(e) {
    const i = e.target.value
    this.setState(() => ({
      remark: i
      }))
  }
  
  handleSaveExit(e) {
    this.props.addEvaluation({
      date: this.state.currentDate,
      score: this.scoreCalculator(),
      remark: this.state.remark,
      student: this.props.student
    })
  }

  scoreCalculator(){
    let score = this.state.selectedBox
    let scoreTable = {
      'red': 1,
      'yellow' : 2,
      'green' : 3
    }

    return scoreTable[score]
  }

  renderScoreBoxes(id) {
    if (this.state.selectedBox === id) {
      return (
        <div className="scoreBoxContainer">
            <div className="scoreBoxSelected" Id={id} onClick={this.handleScoreBox.bind(this)} ></div>
        </div>
      )
    } else {
      return (
        <div className="scoreBoxContainer">
          <div className="scoreBox" id={id} onClick={this.handleScoreBox.bind(this)} ></div>
        </div>
      )
    }
  }
  
  render() {
    
    return (  
      <div> 
        <div>
          <h1>Add Evaluation</h1>
        </div>

        <div>
          <form>
            <div>
              date: <input 
              type="date" 
              value={this.state.currentDate} 
              onChange={this.handleDateChange.bind(this)}
              />
            </div>
            <div>
              <p>Select Score:</p>
            </div>
            <div className="scoreBoxesContainer">
              {this.renderScoreBoxes('red')}
              {this.renderScoreBoxes('yellow')}
              {this.renderScoreBoxes('green')}
            </div>
            <div>
              <p>remark:</p>
              <textarea 
              cols="40" rows="10"
              onChange={this.handleRemarkChange.bind(this)}
              /> 
            </div>
            
          </form>
          <Link to={`/student`} style={{textDecoration: 'none'}}>
            <button
              onClick={this.handleSaveExit.bind(this)}
              >
              save evaluation</button> 
            </Link>
        </div>

      </div>
        
    )
  }
} 

const mapStateToProps = ({currentStudent}) => {
  return {student: currentStudent}
}

export default connect(mapStateToProps, {addEvaluation})(AddEvaluation)