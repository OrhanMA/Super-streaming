import { fetchMovieResource } from "@/app/actions";
import MoviesCarousel from "@/components/MoviesCarousel";
import HomeBreadcrumb from "@/components/HomeBreadcrumb";
export default async function Popular() {
  const popularMovies = await fetchMovieResource("/movie/popular");


  return (
    <div>
      <div className="px-6">
        <HomeBreadcrumb currentSection="Popular" />
        <h1 className="text-2xl font-bold mb-6">Most popular Movies</h1>
        <MoviesCarousel movies={popularMovies} />
      </div>
    </div>
  );
}
