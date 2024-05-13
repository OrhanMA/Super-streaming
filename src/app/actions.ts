const baseURl = "https://api.themoviedb.org/3";

export async function fetchMovieResource(resourceURL: string) {
  const response = await fetch(
    baseURl + resourceURL + "?api_key=" + process.env.MOVIE_DB_API_KEY
  );
  const data = await response.json();
  return data;
}

export async function getMostPopularMovie() {
  const data = await fetchMovieResource("/movie/popular");
  return data.results[0];
}

export async function getMovieDetails(movieId: string) {
  const response = await fetch(
    baseURl + "/movie/" + movieId + "?api_key=" + process.env.MOVIE_DB_API_KEY
  );
  const data = await response.json();
  return data;
}

export async function getMovieSearchResults(searchQuery: string) {
  const response = await fetch(
    baseURl +
      "/search/movie?query=" +
      searchQuery +
      "&api_key=" +
      process.env.MOVIE_DB_API_KEY
  );
  const data = await response.json();
  return data;
}
