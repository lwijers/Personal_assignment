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

class AddStudent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        toBatch: false,
        };
    }


  handleSaveExit(e) {
    this.setState(() => ({
      toBatch: true
    }))
  }
  handleExit(e) {
    this.setState(() => ({
      toBatch: true
    }))
}
  handleSaveNew(e) {
    
}
    

  render() {


    if (this.state.toBatch === true) {
        return <Redirect to='/StudentOverview' />
    }

    return (  
        <div> 
            <div>
                <h1>Create a New Student</h1>
            </div>
            <div>
                <form>
                    <div>
                        first Name:
                        <input type ="text"/>
                    </div>
                    <div>
                        Last Name:
                        <input type ="text"/>
                    </div>
                    <div>
                        picture URL:
                        <input type="url"/>
                    </div>
                </form>
            </div>
            <button onClick={this.handleSaveExit.bind(this)}>save and exit</button>
            <button onClick={this.handleSaveNew.bind(this)}>save and new</button>   
            <button onClick={this.handleExit.bind(this)}>exit</button>
        </div>
        
    )
  }
} 

export default AddStudent

