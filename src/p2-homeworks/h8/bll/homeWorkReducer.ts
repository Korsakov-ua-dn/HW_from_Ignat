import {StateType} from './../HW8'

export const homeWorkReducer = (state: StateType, action: ActionType): StateType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else return -1
            })
            return action.payload === 'up' ? newState : [...newState.reverse()]
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age > 18)
        }
        default: return state
    }
}

type ActionType = {type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: number}