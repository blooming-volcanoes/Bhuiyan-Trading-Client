import { ADD_USER, AUTH_LOADING, REMOVE_USER } from "./authAction";

const initialState = {
  user: {},
  authLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: {},
      };

    case AUTH_LOADING:
      return {
        ...state,
        authLoading: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
