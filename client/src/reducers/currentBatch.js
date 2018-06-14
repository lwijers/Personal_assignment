import {SET_CURRENT_BATCH} from '../actions/batches'

export default function (state = null, {type, payload}) {
    switch (type) {

        case SET_CURRENT_BATCH:
            return (payload)

        default:
            return state
    }
}