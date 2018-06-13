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


  render() {

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
            <button>Create student</button>  
            <button>Save and create new</button>
        </div>
        
    )
  }
} 

export default AddStudent
