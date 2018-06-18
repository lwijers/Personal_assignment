import React, {PureComponent} from 'react'
import {addEvaluation} from '../../actions/evaluations'
import {updateTotScore} from '../../actions/students'
// import {setTotalScore} from '../../actions/students'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './evaluationForm.css'
import color from 'material-ui/colors/teal';


class AddEvaluation extends PureComponent {
  constructor(props) {

    super(props);
    this.state = {
      currentDate: new Date().toISOString().slice(0,10),

      selectedBox: "",
      score: 0,
      remark: "",
      totalEvaluation: 0,
      scoreBoxes: {
        red: true,
        yellow: false,
        green: false
      },
    }
  }

  calculateTotalEvaluation() {
    const allEvals = this.props.studentEvaluations
    let totalScore = 0

    for (var evaluation in allEvals) {
      totalScore +=  allEvals[evaluation].score 
    }
     return totalScore
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
    let studScore = this.scoreCalculator() + this.props.studentTotalScore

    let maxScore = (this.props.studentEvaluations.length +1) * 3

    let avg = studScore / maxScore
    let avgRound = avg.toFixed(2)
    console.log(avgRound)
    let colorCode = ""

    avgRound <= 0.33 ? colorCode = 'red' : avgRound <= 0.67 ? colorCode = 'yellow' : colorCode = 'green'
    console.log(colorCode)

    this.props.addEvaluation({
      date: this.state.currentDate,
      score: this.scoreCalculator(),
      remark: this.state.remark,
      student: this.props.student,
    }, studScore, colorCode) 
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

const mapStateToProps = ({currentStudent, studentEvaluations, studentTotalScore}) => {
  return {
    student: currentStudent,
    studentEvaluations,
    studentTotalScore
  }
}

export default connect(mapStateToProps, {addEvaluation})(AddEvaluation)