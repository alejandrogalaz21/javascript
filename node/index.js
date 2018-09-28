const fetch = require('node-fetch')

fetch('http://localhost:3000/api/todos')
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error => console.log(error))