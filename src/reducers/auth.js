import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESET_LOGIN
} from "../actions/types";

const initialState = {
  user: {},
  isLogin: false,
  isLoading: false,
  erros: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        user: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        erros: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        user: {}
      };
    case RESET_LOGIN:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export default authReducer;
