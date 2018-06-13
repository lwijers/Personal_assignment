import React, {PureComponent} from 'react'
import {getGames, createGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {giveStudents} from '../../actions/students'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import InfoCard from '../layout/InfoCard'
import './DisplayBatch.css'

class DisplayBatch extends PureComponent {
  componentWillMount() {
    this.props.giveStudents()
  }



  render() {

    const {students} = this.props
    
    if (students === null) return null
    
    
    return (   
      <div className="outer-paper">
        <div>
          <h1>Members of Batch</h1>
        </div>
        <div>
          {students.map((batch) => {
            return <InfoCard batch={batch}/>
          })
          } 
        </div>
      
        <div>

        </div>
      
        <div>
        </div>
      
        <div>
        </div>
      
      
      
      </div>
      
    )
  }
} 


const mapStateToProps = ({students}) => {
  return {students}
}


export default connect(mapStateToProps, {giveStudents})(DisplayBatch)
// constructor(props) {
//     super(props);
//     this.state = {
//       toCreateBatch: false,
//     };
//   }


//   handleClick(e) {
//     console.log('afdf')
//     this.setState(() => ({
//       toCreateBatch: true
//     }))
//   }

// if (this.state.toCreateBatch === true) {
//     return <Redirect to='/createBatch' />
//   }

//   