import { fetchMovieResource } from "@/app/actions";
import HomeBreadcrumb from "@/components/Navigation/HomeBreadcrumb";
import MovieCategoryGrid from "@/components/MovieCards/MovieCategoryGrid";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Super Streaming - Popular Movies",
};

export default async function Popular() {
  const popularMovies = await fetchMovieResource("/movie/popular");

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
