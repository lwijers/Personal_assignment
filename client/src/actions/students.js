import * as request from 'superagent'
import {baseUrl} from '../constants'

export const GIVE_STUDENTS = 'GIVE_STUDENTS'
export const GIVE__ONE_STUDENT = 'GIVE__ONE_STUDENT'
export const SET_CURRENT_STUDENT = 'SET_CURRENT_STUDENT'
export const CREATE_STUDENT = 'CREATE_STUDENT'
export const SET_TOTAL_SCORE = 'SET_TOTAL_SCORE'
export const GET_RANDOM_STUDENT = 'GET_RANDOM_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'

export const giveStudents = (id) => dispatch => {
    request
    .get(`${baseUrl}/getClass/${id}`)
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
      .post(`${baseUrl}/student/createNew`)
      .send(student)
      .then(response => {
          console.log('adgagadg')
        dispatch({
            type: CREATE_STUDENT,
            payload: response.body
        })
    })
      .catch(err => console.error(err))
  }

export const setCurrentStudent = (student) => {
    return {
        type: SET_CURRENT_STUDENT,
        payload: student
    }
}

export const setStudentTotalScore = (score) => {
    return {
        type: SET_TOTAL_SCORE,
        payload: score
    }
}

export const getRandomStudent = (color) => (dispatch)=> {
    request
    .get(`${baseUrl}/students/getRandom/${color}`)
    .then( 
        response =>
        dispatch ({
            type: GET_RANDOM_STUDENT,
            payload: response.body
        })
        
    )
    .catch(err => console.error(err))
}

export const deleteStudent = (id) => (dispatch) => {
    console.log(id)
    request
    .delete(`${baseUrl}/student/deleteStudent/${id}`)
    .then(response => dispatch({
      type: DELETE_STUDENT,
      payload: id
    }))
    .catch(err => console.error(err))
  }



//   export const updateTotScore = (id, score) => {
//     request
//     .put(`${baseUrl}/students/${id}`)
//     .send(score)
//     .then(response => {
//         dispatch({
//             type: SUCCESS,
//         })
//     })
// }
  

//   export const setTotalScore = (id) => {
//     request
//     .put(`${baseUrl}/student/setTotalScore/${id}`)
//     // .send(totalScore)
//     .catch(err => console.error(err))
//   }
