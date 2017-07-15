const axios = require('axios');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators
  const data = await fetch('https://aht5hx9969.execute-api.eu-central-1.amazonaws.com/dev/menu');
  data.map(item => processItem(item))
    .forEach(item => createNode(item));
}

function processItem(item) {
  return {
    id: item.id,
    children: [],
    parent: '__SOURCE__',
    content: 'nic',
    weigth: item.weigth,
    description: item.description,
    name: item.name,
    price: item.price,
    internal: {
      contentDigest: item.id,
      type: 'food'
    }
  }
}

function fetch(url) {
  return axios.get(url)
    .then(response => response.data)
    .then(menu => menu.map(item => ({
      id: item[0],
      weigth: item[1],
      name: item[2],
      description: item[3],
      price: item[4]
    })));
}