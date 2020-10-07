import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  AUTHENTICATE_USER,
  LOGOUT,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  error: null,
  inProgress: false,
  isLoggedin: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        inProgress: false,
        isLoggedin: true,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedin: false,
        inProgress: false,
        error: action.error,
      };
    case SIGNUP_START:
      return {
        ...state,
        inProgress: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        inProgress: false,
        isLoggedin: false,
        error: null,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        isLoggedin: false,
        inProgress: false,
        error: action.error,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        isLoggedin: true,
        user: action.user,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };
    default:
      return state;
  }
}
