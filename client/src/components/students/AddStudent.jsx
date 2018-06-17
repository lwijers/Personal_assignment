import React, {PureComponent} from 'react'
import {addStudent} from '../../actions/students'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'

class AddStudent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
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
            batch: this.props.batch,
            totalScore: 0,
            colorCode:  ""
        })
        this.setState({ redirect: true })
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

    if (this.state.redirect === true) {
        return <Redirect to='/class' />
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
            
            <Link to={`/class`} style={{textDecoration: 'none'}}>
                <button>exit</button>
            </Link>
        </div>
        
    )
  }
} 

const mapStateToProps = ({currentBatch}) => {
    return {batch: currentBatch}
  }

export default connect(mapStateToProps, {addStudent})(AddStudent)

