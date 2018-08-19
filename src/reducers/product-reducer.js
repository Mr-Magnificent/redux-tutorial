function productsReducer(state = [], action) {
    if (action.type === 'changeState') {
        return action.payload;
    }
    return state;
}

export default productsReducer;