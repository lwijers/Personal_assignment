import {SET_CURRENT_STUDENT} from '../actions/students'

export default function (state = null, {type, payload}) {
    switch (type) {

        case SET_CURRENT_STUDENT:
            return (payload)

        default:
            return state
    }
}