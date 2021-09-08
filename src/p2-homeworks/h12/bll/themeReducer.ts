import {ThemesType} from "../HW12";

const initState = {
    theme: "some"
};

export const themeReducer = (state = initState, action: ChangeActionType): typeof initState => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: ThemesType) => ({type: "CHANGE_THEME", theme} as const);
type ChangeActionType = ReturnType<typeof changeThemeC>