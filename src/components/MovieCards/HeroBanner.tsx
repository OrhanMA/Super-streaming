import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { PersonIcon, StarFilledIcon } from "@radix-ui/react-icons";
export default function HeroBanner({ movie }: { movie: any }) {
  return (
    <div className="flex flex-col items-center sm:flex-row gap-2 md:gap-12 mt-12 md:mt-8">
      <div className="w-full  mb-2 sm:w-1/2 md:w-1/3 lg:w-1/4 md:mb-0">
        <Link href={`/movie/${movie.id}`}>
          <Image
            className="w-full h-auto max-h-[400px] lg:max-h-[500px] object-contain"
            src={"https://image.tmdb.org/t/p/w780/" + movie.poster_path}
            width={200}
            height={500}
            alt={movie.title + " poster path"}
            priority
          ></Image>
        </Link>
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-2 md:gap-4 p-4">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
          {movie.title}
        </h1>
        <h2 className="text-md lg:text-lg font-semibold">#1 Movie today</h2>
        <p className="text-sm md:text-md lg:text-lg">{movie.overview}</p>
        <div className="flex flex-col gap-2 text-sm">
          <div className="w-full flex flex-wrap justify-between items-center gap-8 text-sm my-4">
            <div className="flex items-center gap-2 md:gap-4">
              <Badge variant={"outline"} className="p-2 font-normal">
                {movie.release_date}
              </Badge>

              <div className="flex items-center gap-1">
                <span className="text-md">
                  {Math.round(Number(movie.popularity))}
                </span>
                <PersonIcon />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-md">
                  {Math.round(Number(movie.vote_average))}
                </span>
                <StarFilledIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
