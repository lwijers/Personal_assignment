import React, {PureComponent} from 'react'
import {getUsers} from '../../actions/users'
import {setCurrentBatch} from '../../actions/batches'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './InfoCard.css'
import {Link} from 'react-router-dom'

class InfoCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toBatch: false,
    };
  }



  handleCardClick(e) {
    this.props.setCurrentBatch(this.props.batch)
    // this.setState(() => ({
    //   toBatch: true
    // }))
  }

  
  render() {
    // if (this.state.toBatch === true) {
    //   return <Redirect to='/studentOverview' />
    // }
    
    const {batch} = this.props

    return (
    
      <Card 
      className="info-card"
      onClick={this.handleCardClick.bind(this)}
      >
        <Link to={`/class`} style={{textDecoration: 'none'}}>
        <p >
          Batch:&nbsp;{batch.id}
        </p>
        <p>
          start date: {batch.startDate}
          end date: {batch.endDate}
        </p>
        </Link>
    </Card>
    )
  }
} 


const mapStateToProps = state => ({
  authenticated: state.currentUser !== null
})


export default connect(null, {setCurrentBatch})(InfoCard)
