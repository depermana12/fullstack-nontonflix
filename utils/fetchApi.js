async function fetchApiData(endpoint) {
  const API_KEY = process.env.API_KEY;
  const API_URL = process.env.API_URL;

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();
  return data;
}

module.exports = fetchApiData;
