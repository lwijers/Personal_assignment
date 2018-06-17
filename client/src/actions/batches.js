import * as request from 'superagent'
import {baseUrl} from '../constants'

export const CREATE_CLASS = "CREATE_CLASS"
export const GIVE_BATCHES = 'GIVE_BATCHES'
export const GIVE_BATCH = 'GIVE_BATCH'
export const SET_CURRENT_BATCH = 'SET_CURRENT_BATCH'


export const giveBatches = () => dispatch => {

    request
    .get(`${baseUrl}/classes/giveAll`)
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
    .get(`${baseUrl}/classes/1`)
    .then(response => {
        dispatch({
            type: GIVE_BATCH,
            payload: response.body
        })
    })
    .catch(err => console.error(err))
}

export const createBatch = (batch) => (dispatch) => {
    request
      .post(`${baseUrl}/classes`)
      .send(batch)
      .then(response => {
          dispatch({
              type: CREATE_CLASS,
              payload: response.body
          })
      })
      .catch(err => console.error(err))
  }


export const setCurrentBatch = (batch) => {
    return {
        type: SET_CURRENT_BATCH,
        payload: batch
    }
  }

export const askRandom = (batchID) => {
    request 
    .get(`${baseUrl}/class/askRandom/${batchID}`)

}