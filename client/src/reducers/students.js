import {SET_CURRENT_STUDENT, CREATE_STUDENT, GET_RANDOM_STUDENT, DELETE_STUDENT} from '../actions/students'

export default function (state = null, {type, payload}) {
    switch (type) {

        case SET_CURRENT_STUDENT:
            return (payload)

        case CREATE_STUDENT:
            return {...state, [payload.id]: payload}

        case GET_RANDOM_STUDENT:
            return (payload)

        case DELETE_STUDENT: 
            console.log('adfadf')
            return state.filter(student => student.id !== payload)

        default:
            return state
    }
}