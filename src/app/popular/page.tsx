import { fetchMovieResource } from "@/app/actions";
import HomeBreadcrumb from "@/components/HomeBreadcrumb";
import MovieCategoryGrid from "@/components/MovieCategoryGrid";

export default async function Popular() {
  const popularMovies = await fetchMovieResource("/movie/popular");

  console.log(popularMovies);

  return (
    <div>
      <div className="px-6">
        <HomeBreadcrumb currentSection="Popular" />
        <h1 className="text-2xl font-bold my-6">Most popular Movies</h1>
        <MovieCategoryGrid movies={popularMovies} />
      </div>
    </div>
  );
}
