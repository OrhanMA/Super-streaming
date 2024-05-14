import { fetchMovieResource } from "@/app/actions";
import MoviesCarousel from "@/components/MoviesCarousel";
import HomeBreadcrumb from "@/components/HomeBreadcrumb";
export default async function TopRated() {
  const topRatedMovies = await fetchMovieResource("/movie/top_rated");

  console.log(topRatedMovies);

  return (
    <div>
      <div className="px-6">
        <HomeBreadcrumb currentSection="Top Rated" />
        <h1 className="text-2xl font-bold mb-6">Top rated Movies</h1>
        <MoviesCarousel movies={topRatedMovies} />
      </div>
    </div>
  );
}
