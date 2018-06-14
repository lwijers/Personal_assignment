import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {giveBatches, createBatch} from '../../actions/batches'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import InfoCard from '../layout/InfoCard'

class AddBatch extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          toBatch: false,
          toBatches:false,
          batchNumber: 0,
          startDate: new Date().toISOString().slice(0,10),
          endDate: ""       
        };
    }

    handleCreateBatch(e) {
        this.props.createBatch({
            batchNumber: this.state.batchNumber,
            startDate: this.state.startDate, 
            endDate: this.state.endDate
        })
        this.setState(() => ({
            toBatch: true
        }))
    }

    handleChange(e) {
        const i = e.target.value
        
        switch (e.target.id) {
        
            case "start-date":
                this.setState(() => ({
                startDate: i
                }))
    
            case "end-date":
                this.setState(() => ({
                endDate: i
                }))               

            default:
                break;
        }
    }

    handleNumberChange(e) {
        const i = Number(e.target.value)
        this.setState(() => ({
            batchNumber: i
        }))
    }  


    handleBack(e) {
        this.setState(() => ({
            toBatches: true
        }))
    }

    render() {
        if (this.state.toBatch === true) {
            return <Redirect to='/studentOverview' />
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
                        batch number:
                        <input 
                        type="number"
                        id="batchNumber" 

                        onChange={this.handleNumberChange.bind(this)}/>
                    </div>
                    <div>
                        start date:
                        <input
                        type ="date"
                        id="start-date"
                        value={this.state.startDate} 
                        onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div>
                        end date:
                        <input 
                        type ="date"
                        id="end-date"
                        value={this.state.endDate}
                        onChange={this.handleChange.bind(this)}/>
                    </div>
                </form>
            </div>
            <button onClick={this.handleCreateBatch.bind(this)}>Create Batch</button>  

            <button onClick={this.handleBack.bind(this)}>back</button>
        </div>       
    )
  }
} 

export default connect(null, {createBatch})(AddBatch)
