import { fetchMovieResource } from "@/app/actions";
import MoviesCarousel from "@/components/MoviesCarousel";

export default async function Upcoming() {
  const upcomingMovies = await fetchMovieResource("/movie/upcoming");
  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <div className="px-6">
        <h1 className="text-2xl font-bold mb-6">Upcoming Movies</h1>
        <MoviesCarousel movies={upcomingMovies} />
      </div>
    </main>
  );
}
