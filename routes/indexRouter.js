const express = require("express");

const formatCurrency = require("../utils/formatCurrency");
const fetchApiData = require("../utils/fetchApi");
const fetchSearch = require("../utils/fetchSearch");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { results } = await fetchApiData("movie/popular");
    const nowPlaying = await fetchApiData("movie/now_playing");
    res.render("index", { results, nowPlaying: nowPlaying.results });
  } catch (error) {
    console.error("Error fetching API data:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/movie/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await fetchApiData(`movie/${movieId}`);
    movie.budget = formatCurrency(movie.budget);
    movie.revenue = formatCurrency(movie.revenue);
    res.render("movie-page/body", { movie });
  } catch (error) {
    console.error("Error fetching movie details:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/search", async (req, res) => {
  try {
    const userSearchTerm = req.query.movieSearch;
    const { results } = await fetchSearch(userSearchTerm);
    res.render("search-page/searchPage", { results });
  } catch (error) {
    console.error("Error searching API data:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
