const { Given } = require('cucumber');
const { get } = require('../support/apiActions');

Given(/^the api is ready$/, async () => {
  const apiResponse = await get('https://jsonplaceholder.typicode.com/posts/1');
  console.log(apiResponse.data);
});
