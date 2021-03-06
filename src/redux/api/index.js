import axios from 'axios';

const handleError = (error) =>
  error.response
    ? {
        error: {
          error: error.response.status,
          message: error.response.data,
        },
      }
    : { error };

const handleSuccess = (response) => ({
  data: response.data,
  headers: response.headers,
});

/**
 * Make HTTP POST call
 * @param {string} url
 * @param {string} query
 * @param {string} token
 *
 * @returns {{json: Object|undefined, error: Object|undefined}} response
 * @returns {Object|undefined} response.json
 * @returns {{status: Object, message: Object}|Object|undefined} response.error
 *
 * @example
 * get("http://management-api", "?search=bonus", "asd32eD5F");
 */
export const get = (url, query, token) => {
  console.log('GET API', url, query, token);
  const req = axios.get(
    encodeURI(url + (query || '')),
    token && {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log('GET req', req);

  return req.then(handleSuccess).catch(handleError);
};

export const requestNewUser = (user) => {
  console.log('SET API', user);
  const req = axios.post('https://reqres.in/api/users', user);

  console.log('SET req', req);
  return req.then(handleSuccess).catch(handleError);
};
