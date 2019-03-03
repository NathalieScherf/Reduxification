


export default function reducer(state = {}, action) {
    if (action.type ==='LOAD_MESSAGE') {

                    state={...state, message: action.message,uhura: action.uhura,
                    error: action.error}

    }
    if (action.type ==='CLEAR_MESSAGE') {
        state={...state, message: action.message,uhura: action.uhura,
        error: action.error}


    }
    if (action.type ==='TRANSLATE_MESSAGE') {
        state={...state, translation: action.translation,
            uhura: action.uhura,
    }
    }
    if (action.type ==='ERROR_MESSAGE') {
        state={...state, translation: action.translation,
            error: action.error
    }

    }
    if (action.type ==='DISPLAY_TEXT') {

            state={...state, message: action.message,}

    }

/*
return Object.assign({}, state, {
    message: action.message,
    uhura: action.uhura,
    error: action.error
});

    return Object.assign({}, state, {
        translation: action.translation,
        uhura: action.uhura
    });
    return Object.assign({}, state, {
        translation: action.translation,
        error: action.error
    });
    if(action.type=='NEW_USER_ONLINE'){
        console.log("new user online", action);
        state = {
            ...state,
            onlineUsers:  [...state.onlineUsers, action.newUser[0]]
        };
    }*/

    console.log("state from reducer: ", state);
    return state;
}
