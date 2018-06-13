import React, {PureComponent} from 'react'
import {getGames, createGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {giveBatches} from '../../actions/batches'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import InfoCard from '../layout/InfoCard'

class BatchOverview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toCreateBatch: false,
    };
  }
  
  componentWillMount() {
    this.props.giveBatches()
  }


  handleClick(e) {
    console.log('afdf')
    this.setState(() => ({
      toCreateBatch: true
    }))
  }

  render() {
    const {batches, authenticated} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)
    if (this.state.toCreateBatch === true) {
      return <Redirect to='/createBatch' />
    }
    

    
    if (batches === null) return null

    return (  
      <div> 
      <div className="outer-div">
      <Typography variant="headline" component="h2">
          Your Batches:
        </Typography>
        {batches.map((batch) => {
          return <InfoCard batch={batch}/>
        })
        }
      </div>
        <button onClick={this.handleClick.bind(this)}>Create Batch </button>         
      </div>
        
    )
  }
} 


const mapStateToProps = state => ({
 batches: state.batches,
 authenticated: state.currentUser!== null
})


export default connect(mapStateToProps, {giveBatches})(BatchOverview)
