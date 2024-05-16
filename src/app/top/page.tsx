import { fetchMovieResource } from "@/app/actions";
import HomeBreadcrumb from "@/components/HomeBreadcrumb";
import MovieCategoryGrid from "@/components/MovieCategoryGrid";
export default async function TopRated() {
  const topRatedMovies = await fetchMovieResource("/movie/top_rated");

  return (
    <div>
      <div className="px-6">
        <HomeBreadcrumb currentSection="Top Rated" />
        <h1 className="text-2xl font-bold my-6">Top rated Movies</h1>
        <MovieCategoryGrid movies={topRatedMovies} />
      </div>
    </div>
  );
}
