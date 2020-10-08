const initialState = {
    fact: "cat fact"
}

export const factReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_FACT":
            return state;
    }
};