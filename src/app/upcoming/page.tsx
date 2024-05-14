import { fetchMovieResource } from "@/app/actions";
import HomeBreadcrumb from "@/components/HomeBreadcrumb";
import MoviesCarousel from "@/components/MoviesCarousel";

export default async function Upcoming() {
  const upcomingMovies = await fetchMovieResource("/movie/upcoming");
  return (
    <div>
      <div className="px-6">
        <HomeBreadcrumb currentSection="Upcoming" />
        <h1 className="text-2xl font-bold mb-6">Upcoming Movies</h1>
        <MoviesCarousel movies={upcomingMovies} />
      </div>
    </div>
  );
}
