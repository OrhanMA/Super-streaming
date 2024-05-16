import Image from "next/image";
import { Movie, MovieData } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export default function MovieCategoryGrid({
  movies,
  detailed = true,
}: {
  movies: MovieData;
  detailed?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-12 sm:gap-6 sm:gap-y-12">
      {movies.results.map((movie: Movie) => {
        return (
          <li
            key={movie.id}
            className="flex flex-col items-center overflow-hidden"
          >
            <Link
              href={`/movie/${movie.id}`}
              className={`w-full h-full flex justify-center items-center  ${
                !movie.poster_path && "bg-black"
              }`}
            >
              {movie.poster_path ? (
                <Image
                  className="object-cover md:min-h-[300px]"
                  src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
                  width={300}
                  height={500}
                  alt={movie.title + " poster path"}
                ></Image>
              ) : (
                <p className="font-bold text-lg">{movie.title}</p>
              )}
            </Link>
            {detailed == true && (
              <>
                <p className="flex items-center font-semibold text-lg text-center mt-4 min-h-[60px]">
                  {movie.title}
                </p>
                <div className="mt-2 flex flex-col gap-4">
                  <div className="flex items-center gap-2 md:gap-4 text-sm">
                    <Badge variant={"outline"} className="p-2 font-normal ">
                      {movie.release_date.slice(0, 4)}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <span>{Math.round(Number(movie.vote_average))}</span>
                      <StarFilledIcon />
                    </div>
                    <p>{movie.original_language.toUpperCase()}</p>
                  </div>
                  <p className="max-h-[150px] line-clamp-5">{movie.overview}</p>
                </div>
              </>
            )}
          </li>
        );
      })}
    </div>
  );
}
