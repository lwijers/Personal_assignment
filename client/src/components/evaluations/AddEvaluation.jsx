import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {giveBatches} from '../../actions/batches'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'



class AddEvaluation extends PureComponent {

  

  render() {
    Date.prototype.toDateInputValue = (function() {
      var local = new Date(this);
      local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
      return local.toJSON().slice(0,10);
  });

  
    return (  
      <div> 
        <div>
          <h1>Add Evaluation</h1>
        </div>

        <div>
          <form>
            <div>
              date: <input type="date" />
            </div>

            <div>
              score:&nbsp;
              <button>red</button><button>yellow</button><button>green</button>
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