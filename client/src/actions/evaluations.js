import * as request from 'superagent'
import {baseUrl} from '../constants'


export const GIVE_EVALUATION = 'GIVE_EVALUATION'

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