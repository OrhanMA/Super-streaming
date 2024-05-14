import { fetchMovieResource } from "@/app/actions";
import MoviesCarousel from "@/components/MoviesCarousel";

export default async function TopRated() {
  const topRatedMovies = await fetchMovieResource("/movie/top_rated");

  console.log(topRatedMovies);

  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <div className="px-6">
        <h1 className="text-2xl font-bold mb-6">Top rated Movies</h1>
        <MoviesCarousel movies={topRatedMovies} />
      </div>
    </main>
  );
}
