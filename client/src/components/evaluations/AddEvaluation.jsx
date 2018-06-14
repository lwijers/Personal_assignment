import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {giveBatches} from '../../actions/batches'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './evaluationForm.css'


class AddEvaluation extends PureComponent {
  constructor(props) {

    super(props);
    this.state = {
      currentDate: new Date().toISOString().slice(0,10),
      selectedBox: "",
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
          <div className="scoreBox" Id={id} onClick={this.handleScoreBox.bind(this)} ></div>
        </div>
      )
    }
  }
  



  render() {
    Date.prototype.toDateInputValue = (function() {
      var local = new Date(this);
      local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
      return local.toJSON().slice(0,10);
  });

  console.log(this.state.selectedBox)
  


  
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
            <div className="scoreBoxesContainer">
              {this.renderScoreBoxes('red')}
              {this.renderScoreBoxes('yellow')}
              {this.renderScoreBoxes('green')}
            </div>
            <div>
              <p>remark:</p>
              <textarea cols="40" rows="10"/> 
            </div>
            <button>save remark</button> 
          </form>
        
        </div>

      </div>
        
    )
  }
} 

export default AddEvaluation