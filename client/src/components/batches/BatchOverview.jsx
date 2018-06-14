import React, {PureComponent} from 'react'
import {giveBatches} from '../../actions/batches'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
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
        <h1>Batch Overview</h1>
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
