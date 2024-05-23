import { MovieDetails } from "../../../app/types";
import LikeButton from "../../../components/Favorites/LikeButton";
import { Badge } from "../../../components/ui/badge";
import { formatDuration } from "../../../lib/date";
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function MainInfos({ movie }: { movie: MovieDetails }) {
  return (
    <>
      <ul className="m-2 md:mx-0 flex flex-wrap gap-2">
        {movie.genres.map((genre: { id: number; name: string }) => {
          return (
            <li key={genre.id}>
              <Badge className="text-xs" variant={"outline"}>
                {genre.name}
              </Badge>
            </li>
          );
        })}
      </ul>
      <h1 className="p-2 md:px-0 md:mt-4 font-bold text-xl sm:text-2xl">
        {movie.title}
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-wrap justify-between items-center gap-8 text-sm my-4">
          <div className="flex items-center gap-2 md:gap-4">
            {movie.release_date && (
              <Badge variant={"outline"} className="p-2 font-normal ">
                {movie.release_date}
              </Badge>
            )}
            {movie.runtime != "0" && (
              <>{movie.runtime && <p>{formatDuration(movie.runtime)}</p>}</>
            )}
          </div>
          {movie.vote_average && (
            <div className="flex items-center gap-1">
              <span className="text-lg">
                {Math.round(Number(movie.vote_average))}
              </span>
              <StarFilledIcon />
            </div>
          )}
        </div>

        <p className="flex flex-col items-start gap-6 my-4 sm:my-8 md:my-6">
          {movie.overview ? (
            <>{movie.overview}</>
          ) : (
            <>Overview not available yet</>
          )}
        </p>
      </div>
      <LikeButton
        classNames="text-xs p-2 bg-red-800 text-white"
        movie={movie}
      />
    </>
  );
}
