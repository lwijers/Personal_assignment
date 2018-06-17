import {SET_TOTAL_SCORE} from '../actions/students'

export default function (state = null, {type, payload}) {
    switch (type) {

        case SET_TOTAL_SCORE:
        
        return (payload)

        default:
            return state
    }
}