import React, {PureComponent} from 'react'
import {giveBatches} from '../../actions/batches'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Typography from 'material-ui/Typography'
import InfoCard from '../layout/InfoCard'

class Classes extends PureComponent {

  componentWillMount() {

    if (this.props.classes === null) this.props.giveBatches() 
  }




  render() {

    const {classes, authenticated} = this.props
   
    if (classes === null) return null
    

    return (  
      <div> 
        <h1>Batch Overview</h1>
      <div className="outer-div">
      <Typography variant="headline" component="h2">
          Your Batches:
      </Typography>

        {classes.map((batch) => {
          
          return <InfoCard batch={batch}/>
        })
        }
      </div>
        <Link to={`/classes/createNew`} style={{textDecoration: 'none'}}>
          <button >Create Batch </button>
        </Link>         
      </div>
        
    )
  }
} 


const mapStateToProps = state => ({
 classes: state.classes === null ? null : state.classes[0],
 authenticated: state.currentUser!== null
})


export default connect(mapStateToProps, {giveBatches})(Classes)
