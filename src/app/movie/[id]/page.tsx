import { getMovieDetails } from "@/app/actions";
import { MovieCard } from "@/components/MovieCard";
import HomeBreadcrumb from "@/components/HomeBreadcrumb";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(Number(params.id));

  return (
    <>
      <HomeBreadcrumb currentSection={movie.title} />
      <MovieCard movie={movie} />
    </>
  );
}
