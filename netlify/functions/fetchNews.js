const axios = require('axios');

exports.handler = async function (event) {
  const category = event.queryStringParameters.category || 'general';
  const page = event.queryStringParameters.page || 1;
  const pageSize = event.queryStringParameters.pageSize || 5;

  const apiKey = process.env.NEWS_API_KEY;

  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        category,
        page,
        pageSize,
        apiKey
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'NewsAPI fetch failed.', detail: error.message }),
    };
  }
};
