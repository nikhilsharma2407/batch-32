const initialState = {
    count: 0,
    value1: 'abcd',
    title: "redux"
};

const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
}

// Action creator => return an action
export const incrementActionCreator = (payload = 1) => {
    return { type: ACTIONS.INCREMENT, payload }
};

export const decrementActionCreator = (payload = 1) => {
    return { type: ACTIONS.DECREMENT, payload }
};

export const resetActionCreator = () => {
    return { type: ACTIONS.RESET }
};

export const countReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.INCREMENT:
            // update the state immutabily;
            const copyState = { ...state };
            copyState.count = state.count + payload
            return copyState;

        case ACTIONS.DECREMENT:
            return { ...state, count: state.count - payload }

        case ACTIONS.RESET:
            return initialState

        default:
            return state
    }

}