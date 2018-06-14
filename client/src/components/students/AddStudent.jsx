import React, {PureComponent} from 'react'
import {getGames, createGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {giveBatches} from '../../actions/batches'
import {addStudent} from '../../actions/students'
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
        firstName: "",
        lastName: "",
        pictureURL: "",

        };
    }


    handleSaveExit(e) {
        this.props.addStudent({
            pictureURL: this.state.pictureURL,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            batch: this.props.batch
        })

        this.setState(() => ({
        toBatch: true
        }))
    }

    handleExit(e) {
        this.setState(() => ({
        toBatch: true
        }))
    }

    handlefirstName(e) {
        let i = e.target.value
        this.setState(() => ({
            firstName: i
        }))
    }

    handlelastName(e) {
        let i = e.target.value
        this.setState(() => ({
            lastName: i
        }))
    }

    handlepictureURL(e) {
        let i = e.target.value
        this.setState(() => ({
            pictureURL: i
        }))
    }   
 
  render() {

    if (this.state.toBatch === true) {
        return <Redirect to='/StudentOverview' />
    }

    return (  
        <div> 
            <div>
                <h1>Add a New Student</h1>
            </div>
            <div>
                <form>
                    <div>
                        first Name:
                        <input 
                        type ="text"
                        id="firstName"
                        onChange={this.handlefirstName.bind(this)}
                        />
                    </div>
                    <div>
                        Last Name:
                        <input 
                        type ="text"
                        id="lastName"
                        onChange={this.handlelastName.bind(this)}
                        />
                    </div>
                    <div>
                        picture URL:
                        <input 
                        type="url"
                        id="pictureURL"
                        onChange={this.handlepictureURL.bind(this)}
                        />
                    </div>
                </form>
            </div>
            <button onClick={this.handleSaveExit.bind(this)}>save and exit</button>

            <button onClick={this.handleExit.bind(this)}>exit</button>
        </div>
        
    )
  }
} 

const mapStateToProps = ({currentBatch}) => {
    return {batch: currentBatch}
  }

export default connect(mapStateToProps, {addStudent})(AddStudent)

