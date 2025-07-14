const axios = require('axios');

exports.handler = async function (event) {
  const query = event.queryStringParameters.q || 'bitcoin';
  const apiKey = process.env.NEWS_API_KEY;

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        apiKey: apiKey
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'NewsAPI fetch failed.' }),
    };
  }
};
