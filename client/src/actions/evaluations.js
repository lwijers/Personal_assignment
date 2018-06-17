import * as request from 'superagent'
import {baseUrl} from '../constants'


export const GIVE_EVALUATION = 'GIVE_EVALUATION'
export const GIVE_STUDENT_EVALUATIONS = 'GIVE_STUDENT_EVALUATIONS'
export const SET_EVALUATION = 'SET_EVALUATION'
export const SET_TOTAL_SCORE = 'SET_TOTAL_SCORE'

export const giveEvaluation = () => dispatch => {
    request
    .get(`${baseUrl}/evaluations/1`)
    .then(response => {
        dispatch({
            type: GIVE_EVALUATION,
            payload: response.body
        })
    })
    .catch(err => console.error(err))
}

export const addEvaluation = (evaluation, score, color) => dispatch => {


    request
    .post(`${baseUrl}/evaluations`)
    .send(evaluation)
    .then(response=> {
        dispatch({
            type: SET_EVALUATION,
            payload: response.body
        })
    })

    request
    .put(`${baseUrl}/students/${evaluation.student.id}`)
    .send({
        totalScore : score,
        colorCode : color
     })
    .catch(err => console.error(err))
     .then(response=> {
        dispatch({
            type: SET_TOTAL_SCORE,
            payload: response.body
        })
    })

}

export const giveEvalByStud = (id) => dispatch => {

    request
    .get(`${baseUrl}/studentEvaluations/${id}`)
    .then(response => {
        dispatch({
            type: GIVE_STUDENT_EVALUATIONS,
            payload: response.body
        })
    })
    .catch(err => console.error(err))
}