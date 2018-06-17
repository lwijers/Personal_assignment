import {SET_CURRENT_STUDENT, CREATE_STUDENT} from '../actions/students'

export default function (state = null, {type, payload}) {
    switch (type) {

        case SET_CURRENT_STUDENT:
            return (payload)

        case CREATE_STUDENT:
        console.log(state)
        return {...state, [payload.id]: payload}

        default:
            return state
    }
}