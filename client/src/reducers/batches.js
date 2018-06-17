import {GIVE_BATCHES, CREATE_CLASS} from '../actions/batches'

export default function (state = null, {type, payload}) {

    switch (type) {
        case GIVE_BATCHES:
            return{...state, ...payload.classes}
        
            case CREATE_CLASS :
                return {...state, [payload.id]: payload}

        default:
            return state
    }
}