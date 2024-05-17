import { getMovieDetails } from "@/app/actions";
import { DetailedMovieCard } from "@/components/MovieCards/Details/DetailedMovieCard";
import HomeBreadcrumb from "@/components/Navigation/HomeBreadcrumb";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(Number(params.id));

  return (
    <>
      <HomeBreadcrumb currentSection={movie.title} />
      <DetailedMovieCard movie={movie} />
    </>
  );
}
