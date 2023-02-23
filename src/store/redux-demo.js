import { createStore } from "redux";

let initialState = {counter: 0, showCounter: true};

const reducerFunction = (state = initialState, action) => {
    if(action.type === 'increment'){
        return {counter: state.counter + 1, showCounter: state.showCounter};
    }
    else if(action.type === 'decrement'){
        return {counter: state.counter - 1, showCounter: state.showCounter};
    }
    else if(action.type === 'toggle'){
        return {counter: state.counter, showCounter: !state.showCounter};
    }
    return state;
}

const store = createStore(reducerFunction);

export default store;