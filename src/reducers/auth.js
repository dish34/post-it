import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
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
    default:
      return state;
  }
}
