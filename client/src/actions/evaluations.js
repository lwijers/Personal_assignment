import * as request from 'superagent'
import {baseUrl} from '../constants'


export const GIVE_EVALUATION = 'GIVE_EVALUATION'
export const GIVE_STUDENT_EVALUATIONS = 'GIVE_STUDENT_EVALUATIONS'

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

export const addEvaluation = (evaluation) => dispatch => {

    request
    .post(`${baseUrl}/evaluations`)
    .send(evaluation)
    .catch(err => console.error(err)) 
}

export const giveEvalByStud = (id) => dispatch => {

    request
    .get(`${baseUrl}/studentEvaluations/${id}`)
    .then(response => {
        console.log(response)
        dispatch({
            type: GIVE_STUDENT_EVALUATIONS,
            payload: response.body
        })
    })
    .catch(err => console.error(err))
}