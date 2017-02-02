const initialState = {
    name: "",
}

const teamReducer = (state = initialState, action) => {

    switch (action.type) {

        case "GREETINGS":
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state;
    }
} 

export default teamReducer;