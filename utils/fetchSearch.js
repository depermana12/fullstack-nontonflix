async function searchApiData(term) {
  try {
    const API_KEY = process.env.API_KEY;
    const API_URL = process.env.API_URL;

    const searchUrl = `${API_URL}search/movie?api_key=${API_KEY}&include_adult=false&language=id-ID&query=${term}`;

    const response = await fetch(searchUrl);
    const searchData = await response.json();

    return searchData;
  } catch (error) {
    throw new Error(`Error searching API data: ${error.message}`);
  }
}

module.exports = searchApiData;
