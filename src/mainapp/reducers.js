import {DECREMENT,INCREMENT} from './action-types'
export function counter(state = 0 ,action){
    console.log('counter()',state,action)
    switch(action.type){
        case INCREMENT:
            console.log(state+" "+action.data)
            return state + action.data ;
        case DECREMENT:
            console.log(state)
            return state - action.data ;
        default:
            return state
    }

}