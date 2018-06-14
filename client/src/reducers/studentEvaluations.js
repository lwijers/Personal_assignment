import {GIVE_STUDENT_EVALUATIONS} from '../actions/evaluations'

export default function (state = null, {type, payload}) {
    switch (type) {
        
        case GIVE_STUDENT_EVALUATIONS:
            return(payload)

        default:
            return state
    }
}