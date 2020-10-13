export function getFormBody(params) {
  console.log(params);
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' = user%20name
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%202020

    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&');
}

export function getAuthTokenFromLocalStrorage() {
  return localStorage.getItem('token');
}
