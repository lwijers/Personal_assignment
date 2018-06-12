import {GIVE_BATCHES} from '../actions/batches'

export default function (state = null, {type, payload}) {
    switch (type) {
        case GIVE_BATCHES:
            console.log(payload, 'ohlklkhj')
            return(payload.batches)

        default:
            return state
    }
}