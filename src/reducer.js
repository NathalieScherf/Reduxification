
export default function reducer(state = {}, action) {
    if (action.type ==='LOAD_MESSAGE') {
        state={...state,
                message: action.message,
                uhura: action.uhura,
                error: action.error}
    }
    if (action.type ==='CLEAR_MESSAGE') {
        state={...state,
            message: action.message,
            uhura: action.uhura,
            error: action.error}
    }
    if (action.type ==='TRANSLATE_MESSAGE') {
        state={...state,
            translation: action.translation,
            uhura: action.uhura}
    }
    if (action.type ==='ERROR_MESSAGE') {
        state={...state,
            translation: action.translation,
            error: action.error,
        uhura: action.uhura}
    }
    if (action.type ==='DISPLAY_TEXT') {
            state={...state,
                message: action.message}
    }
    return state;
}
