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

class BatchOverview extends PureComponent {


  render() {

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
            <button>Create Batch</button>  
            <button>add Student</button>
        </div>
        
    )
  }
} 

export default BatchOverview
