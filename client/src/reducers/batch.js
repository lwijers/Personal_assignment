import {
    GIVE__ONE_STUDENT,
    CREATE_STUDENT,
    GIVE_STUDENTS
} from '../actions/students'

export default function (state = null, {type, payload}) {
    switch (type) {
        case GIVE_STUDENTS:
            return(payload)
        
        case GIVE__ONE_STUDENT:
            return(payload)

        case CREATE_STUDENT:
            console.log(state)
            return {...state, [payload.id]: payload}
    

        default:
            return state
    }
}

