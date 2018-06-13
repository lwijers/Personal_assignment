import * as request from 'superagent'
import {baseUrl} from '../constants'

export const GIVE_STUDENTS = 'GIVE_STUDENTS'
export const GIVE__ONE_STUDENT = 'GIVE__ONE_STUDENT'

export const giveStudents = () => dispatch => {
    
    request
    .get(`${baseUrl}/students`)
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