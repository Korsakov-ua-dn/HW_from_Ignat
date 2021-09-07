import { Dispatch } from "redux"

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => { // fix any
    switch (action.type) {
        case "SET_LOADING": 
            return {...state, isLoading: action.isLoading}
        
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: "SET_LOADING", isLoading} as const) // fix any
export const loading = (dispatch: Dispatch) => {
    dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
}

type LoadingActionType = ReturnType<typeof loadingAC>