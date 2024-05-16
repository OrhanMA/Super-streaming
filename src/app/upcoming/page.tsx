import { fetchMovieResource } from "@/app/actions";
import HomeBreadcrumb from "@/components/HomeBreadcrumb";
import MovieCategoryGrid from "@/components/MovieCategoryGrid";

export default async function Upcoming() {
  const upcomingMovies = await fetchMovieResource("/movie/upcoming");
  return (
    <div>
      <div className="px-6">
        <HomeBreadcrumb currentSection="Upcoming" />
        <h1 className="text-2xl font-bold my-6">Upcoming Movies</h1>
        <MovieCategoryGrid movies={upcomingMovies} />
      </div>
    </div>
  );
}
