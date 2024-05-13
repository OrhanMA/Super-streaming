import Image from "next/image";
import {
  fetchMovieResource,
  getMovieDetails,
  getMovieSearchResults,
} from "@/app/actions";
import { MovieCard } from "./_components/MovieCard";

export default async function Home() {
  const popularMovies = await fetchMovieResource("/movie/popular");
  const mostPopularMovie = popularMovies.results[0];
  // const topRatedMovies = await fetchMovieResource("/movie/top_rated");
  // const upcomingMovies = await fetchMovieResource("/movie/upcoming");
  // const movieDetails = await getMovieDetails(238);
  // const movieSearch = await getMovieSearchResults("Mario");

  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <HeroBanner movie={mostPopularMovie} />
    </main>
  );
}

function HeroBanner({ movie }: { movie: any }) {
  console.log(movie);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3 mb-2 md:mb-0">
        <Image
          className="w-full h-auto"
          src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
          width={200}
          height={500}
          alt={movie.title + " poster path"}
        ></Image>
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-2 md:gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">{movie.title}</h1>
        <p>Release date: {movie.release_date}</p>
        <p>Popularity: {movie.popularity}</p>
        <p>Rating: {movie.vote_average}</p>
        <p className="mt-10">{movie.overview}</p>
      </div>
    </div>
  );
}
