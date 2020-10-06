const scope = require('./scope');
const axios = require('axios').default;

async function request(url, headers, body, params, method) {
  const config = {
    url: url,
    method: method,
    baseURL: scope.baseUrl || '',
    headers: { 'Content-type': 'Application/json', ...headers },
  };

  if (params) {
    if (method === 'get') {
      config.params = params;
    } else {
      config.data = body;
    }
  }

  return await axios.request(config);
}

function get(url, headers, params) {
  return request(url, headers, params, 'get');
}

function post(url, headers, body) {
  return request(url, headers, body, 'post');
}

module.exports = { get, post };
