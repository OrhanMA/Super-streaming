import { getMovieDetails } from "@/app/actions";
import { MovieCard } from "@/app/_components/MovieCard";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(params.id);
  return (
    <div className="flex min-h-screen flex-col justify-between p-12">
      <MovieCard movie={movie} />
    </div>
  );
}
