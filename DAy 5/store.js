import { createStore } from 'redux';

// Define your initial state
const initialState = {
  user: null, // Placeholder for user data
};

// Define your reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
