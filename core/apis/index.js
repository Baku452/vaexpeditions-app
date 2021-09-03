/* eslint-disable no-console */

const headers = new Headers();
headers.append(
  'X-CSCAPI-KEY',
  'aXpIVG5iUDdTTTVubVoyelZiMHgxU2MxcDk0clZ0amdLQUh2dE4wMw==',
);

const requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow',
};
async function getCities() {
  let obj;
  fetch('https://api.countrystatecity.in/v1/countries', requestOptions)
    .then(response => response.json())
    .then(result => {
      obj = result;
    })
    .catch(error => {
      return { error: error.response };
    });
  return obj;
}
export { getCities };
