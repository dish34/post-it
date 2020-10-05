import { LOGIN_START } from '.actionTypes';
import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
// asynchronous call from thunk
// return a function
export function login(email, password) {
  return (dispatch) => {
    const url = APIUrls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    });
  };
}
