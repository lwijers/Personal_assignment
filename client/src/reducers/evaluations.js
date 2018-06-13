import {GIVE_EVALUATION} from '../actions/evaluations'

export default function (state = null, {type, payload}) {
    switch (type) {
        
        case GIVE_EVALUATION:
            return(payload)

        default:
            return state
    }
}