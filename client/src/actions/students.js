import * as request from 'superagent'
import {baseUrl} from '../constants'

export const GIVE_STUDENTS = 'GIVE_STUDENTS'
export const GIVE__ONE_STUDENT = 'GIVE__ONE_STUDENT'
export const SET_CURRENT_STUDENT = 'SET_CURRENT_STUDENT'

export const giveStudents = (id) => dispatch => {
    
    request
    .get(`${baseUrl}/students/${id}`)
    .then(response => {
        dispatch({
            type: GIVE_STUDENTS,
            payload: response.body
        })
    })
    .catch(err => console.error(err))
}

export const giveSingleStudent = () => dispatch => {
    request.get(`${baseUrl}/students/12`)
    .then(response => {
        dispatch({
            type: GIVE__ONE_STUDENT,
            payload: response.body
        })
    })
    .catch(err => console.error(err))
}

export const addStudent = (student) => (dispatch) => {
    request
      .post(`${baseUrl}/students`)
      .send(student)
      .catch(err => console.error(err))
  }

  export const setCurrentStudent = (student) => {
    return {
        type: SET_CURRENT_STUDENT,
        payload: student
    }
  }

