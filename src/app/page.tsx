import {
  fetchMovieResource,
  getMovieDetails,
  getMovieSearchResults,
} from "@/app/actions";
import HeroBanner from "@/components/HeroBanner";
import MoviesCarousel from "@/components/MoviesCarousel";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

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
    <main className="flex min-h-screen flex-col justify-between p-12">
      {searchParams.message && (
        <Alert variant="destructive" className="bg-white mb-6">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{searchParams.message}</AlertDescription>
        </Alert>
      )}
      <HeroBanner movie={mostPopularMovie} />
      <div className="w-full flex flex-col items-center  mt-16 gap-12 p-6">
        <MoviesCarousel movies={popularMovies} category="Most popular" />
        <MoviesCarousel movies={topRatedMovies} category="Top rated" />
        <MoviesCarousel movies={upcomingMovies} category=" Upcoming movies" />
      </div>
    </main>
  );
}
