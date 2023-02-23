import { createSlice, configureStore } from "@reduxjs/toolkit";

let initialCounterState = {counter: 0, showCounter: true};
let initialAuthState = {isAuthenticated : false};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){state.counter++;},
        decrement(state){state.counter--;},
        change(state, action){state.counter = state.counter + action.payload;},
        toggle(state){state.showCounter = !state.showCounter;}  
    }
});

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state){state.isAuthenticated = true},
        logout(state){state.isAuthenticated = false}
    }
});

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;