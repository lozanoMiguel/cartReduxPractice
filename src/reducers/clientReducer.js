const initialState = {
    off: 0,
    gibson : 0,
    stanley : 0
}

const clientReducer = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT_GIBSON":
            if(action.payload.name === 'gibson')
                return {
                    ...state,
                    gibson : state.gibson + action.payload.valor
                }
        case "INCREMENT_OFF":
            if(action.payload.name === 'off')
                return {
                    ...state,
                    off : state.off+ action.payload.valor
                }
        case "INCREMENT_STANLEY":
            if(action.payload.name === 'stanley')
                return {
                    ...state,
                    stanley : state.stanley + action.payload.valor
                }
        default:
            return state;
    }
}

export default clientReducer;