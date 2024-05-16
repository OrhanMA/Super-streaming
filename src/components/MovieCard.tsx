import { MovieDetails } from "@/app/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import LikeButton from "./LikeButton";
import { formatDuration } from "@/lib/date";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

export function MovieCard({ movie }: { movie: MovieDetails }) {
  return (
    <div className="bg-transparent border-none text-slate-200 flex flex-col items-center pt-6 md:pt-12">
      <div className="flex flex-col md:flex-row md:gap-6 p-0">
        <div className="w-full flex justify-center items-center sm:justify-start mb-4 md:min-w-[300px]">
          {movie.backdrop_path ? (
            <Image
              className="max-h-[400px] object-cover"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="test"
              // fill={true}
              width={640}
              height={300}
            ></Image>
          ) : (
            <p className="font-bold text-lg">{movie.title}</p>
          )}
        </div>
        <div className="mx-4 md:m-0 max-w-[700px]">
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
          <p className="p-2 md:px-0 md:mt-4 font-bold text-xl sm:text-2xl">
            {movie.title}
          </p>
          <div className="flex flex-col items-center">
            {movie.release_date && movie.runtime && movie.vote_average && (
              <div className="w-full flex flex-wrap justify-between items-center gap-8 text-sm my-4">
                <div className="flex items-center gap-2 md:gap-4">
                  <Badge variant={"outline"} className="p-2 font-normal ">
                    {movie.release_date}
                  </Badge>
                  <p>{formatDuration(movie.runtime)}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-lg">
                    {Math.round(Number(movie.vote_average))}
                  </span>
                  <StarFilledIcon />
                </div>
              </div>
            )}
            <p className="flex flex-col items-start gap-6 my-4 sm:my-8 md:my-6 text-sm">
              {movie.overview}
            </p>
          </div>
          <LikeButton classNames="text-xs p-2" movie={movie} />
        </div>
      </div>
    </div>
  );
}
