import * as request from 'superagent'
import {baseUrl} from '../constants'



export const GIVE_BATCHES = 'GIVE_BATCHES'
export const GIVE_BATCH = 'GIVE_BATCH'

export const giveBatches = () => dispatch => {
    request
    .get(`${baseUrl}/batches`)
    .then(response => {
        dispatch({
            type: GIVE_BATCHES,
            payload: response.body
        })
    })
    .catch(err => console.error(err))
}

export const giveSingleBatch = () => dispatch => {
    request
    .get(`${baseUrl}/batches/1`)
    .then(response => {
        dispatch({
            type: GIVE_BATCH,
            payload: response.body
        })
    })
    .catch(err => console.error(err))
}


export const createBatch = (batch) => (dispatch, getState) => {
    request
      .post(`${baseUrl}/batches`)
      .send(batch)
      .catch(err => console.error(err))
  }