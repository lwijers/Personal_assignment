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

class AddBatch extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          toBatch: false,
          toBatches:false,
        };
      }


      handleCreateBatch(e) {
        console.log('afdf')
        this.setState(() => ({
            toBatch: true
        }))
      }


      handleBack(e) {
        this.setState(() => ({
            toBatches: true
        }))
      }

  render() {
    if (this.state.toBatch === true) {
        return <Redirect to='/displayBatch' />
      } else if (this.state.toBatches === true) {
        return <Redirect to='/' />
      }


    return (  
        <div> 
            <div>
                <h1>Create a New Batch</h1>
            </div>
            <div>
                <form>
                    <div>
                        start date:
                        <input type ="date" id="start-date"/>
                    </div>
                    <div>
                        end date:
                        <input type ="date"id="end-date"/>
                    </div>
                </form>
            </div>
            <button onClick={this.handleCreateBatch.bind(this)}>Create Batch</button>  

            <button onClick={this.handleBack.bind(this)}>back</button>
        </div>
        
    )
  }
} 

export default AddBatch

// constructor(props) {
//     super(props);
//     this.state = {
//       toCreateBatch: false,
//     };
//   }


//   handleClick(e) {
//     console.log('afdf')
//     this.setState(() => ({
//       toCreateBatch: true
//     }))
//   }

// if (this.state.toCreateBatch === true) {
//     return <Redirect to='/createBatch' />
//   }

//   <button onClick={this.handleClick.bind(this)}>