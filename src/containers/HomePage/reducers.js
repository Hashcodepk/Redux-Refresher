const defaultState = {
    user: ["No User!"]
};

const homePageReducer = (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default homePageReducer;