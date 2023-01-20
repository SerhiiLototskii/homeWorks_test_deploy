const initState = {
    themeId: 1,
}
type initialStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeThemeAC): initialStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":{
            let stateCopy = {...state}
            stateCopy.themeId = action.id
            return stateCopy
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeAC => ({ type: 'SET_THEME_ID', id }) // fix any

type changeThemeAC = {
    id:number
    type: 'SET_THEME_ID'
}