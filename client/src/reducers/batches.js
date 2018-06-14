import {GIVE_BATCHES} from '../actions/batches'

export default function (state = null, {type, payload}) {
    switch (type) {
        case GIVE_BATCHES:

            return(payload.batches)

        default:
            return state
    }
}