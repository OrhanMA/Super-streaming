import {
  fetchMovieResource,
  getMovieDetails,
  getMovieSearchResults,
} from "@/app/actions";
import HeroBanner from "@/components/HeroBanner";
import HomeAlert from "@/components/HomeAlert";
import MoviesCarousel from "@/components/MoviesCarousel";

export default async function Home({
  searchParams,
}: {
  searchParams: { message?: string };
}) {
  const popularMovies = await fetchMovieResource("/movie/popular");
  const mostPopularMovie = popularMovies.results[0];
  const topRatedMovies = await fetchMovieResource("/movie/top_rated");
  const upcomingMovies = await fetchMovieResource("/movie/upcoming");

  return (
    <div>
      {searchParams.message && <HomeAlert message={searchParams.message} />}
      <HeroBanner movie={mostPopularMovie} />
      <div className="w-full flex flex-col items-center  mt-16 gap-12 p-6">
        <MoviesCarousel movies={popularMovies} category="Most popular" />
        <MoviesCarousel movies={topRatedMovies} category="Top rated" />
        <MoviesCarousel movies={upcomingMovies} category=" Upcoming movies" />
      </div>
    </div>
  );
}
