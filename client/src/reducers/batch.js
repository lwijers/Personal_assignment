import {GIVE_STUDENTS} from '../actions/students'
import {GIVE__ONE_STUDENT} from '../actions/students'

export default function (state = null, {type, payload}) {
    switch (type) {
        case GIVE_STUDENTS:
            return(payload.students)
        
        case GIVE__ONE_STUDENT:
            return(payload)

        default:
            return state
    }
}