import React, {PureComponent} from 'react'
import { createBatch} from '../../actions/batches'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'


class AddBatch extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          batchNumber: 0,
          startDate: new Date().toISOString().slice(0,10),
          endDate: ""       
        };
    }

    handleCreateBatch(e) {
        e.preventDefault()
        this.props.createBatch({
            batchNumber: this.state.batchNumber,
            startDate: this.state.startDate, 
            endDate: this.state.endDate
        })
    this.setState({ redirect: true })
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

    render() {

    return (  
        <div> 
            {this.state.redirect && <Redirect to="/classes" />}
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
            <Link to={`/classes`} style={{textDecoration: 'none'}}>
                <button onClick={this.handleCreateBatch.bind(this)}>Create Batch</button>  
                <button>back</button>
            </Link>
        </div>       
    )
  }
} 

export default connect(null, {createBatch})(AddBatch)
