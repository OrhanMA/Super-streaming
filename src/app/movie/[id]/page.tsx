import { getMovieDetails } from "@/app/actions";
import { MovieCard } from "@/components/MovieCard";
import HomeBreadcrumb from "@/components/HomeBreadcrumb";
import Image from "next/image";
export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(params.id);

  return (
    <div>
      <div className="px-6">
        <HomeBreadcrumb currentSection={movie.title} />
        <MovieCard movie={movie} />
      </div>
    </div>
  );
}
