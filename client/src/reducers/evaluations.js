import {SET_EVALUATION} from '../actions/evaluations'

export default function (state = null, {type, payload}) {
    switch (type) {
        
        case SET_EVALUATION:
            return(payload)


        default:
            return state
    }
}