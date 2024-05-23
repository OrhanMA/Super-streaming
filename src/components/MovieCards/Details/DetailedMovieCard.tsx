import { MovieDetails } from "../../../app/types";
import MainInfos from "./MainInfos";
import SecondaryInfos from "./SecondaryInfos";
import Image from "next/image";

export function DetailedMovieCard({ movie }: { movie: MovieDetails }) {
  return (
    <div className="bg-transparent border-none text-slate-200 flex flex-col items-center pt-6 md:pt-12">
      <div className="flex flex-col lg:flex-row md:gap-6 p-0">
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
          <MainInfos movie={movie} />
        </div>
      </div>
      <SecondaryInfos movie={movie} />
    </div>
  );
}
