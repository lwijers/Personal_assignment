import * as request from 'superagent'
import {baseUrl} from '../constants'

export const GIVE_BATCHES = 'GIVE_BATCHES'


export const giveBatches = () => dispatch => {
    request
    .get(`${baseUrl}/batches`)
    .then(response => {
        console.log(response, 'afagag')
        dispatch({
            type: GIVE_BATCHES,
            payload: response.body
        })
    })
    .catch(err => console.error(err))
}