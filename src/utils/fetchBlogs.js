require('dotenv').config();
const fetch = require('node-fetch');
const _ = require("lodash");

const customCache = new Map();

const fetchBlogs = _.memoize(
  async () => {
    const currentTime = Date.now(); //Get the current time
    const cacheEntry = customCache.get('cache-key');

    if (cacheEntry && currentTime - cacheEntry.timestamp < 10000) {
      return cacheEntry.data;
    }
    else
    {
      const response = await fetch(process.env.URL, {
        method: "GET",
        headers: {
          "x-hasura-admin-secret": process.env.SECRET
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      customCache.set('cache-key', { data: data, timestamp: currentTime });
      return data;
    }
  },

  ()=>{
    return "cache-key";
  }
);

//Clear the cache after every 10 seconds
setInterval(() => {
  customCache.clear();
}, 10000);

module.exports = fetchBlogs;