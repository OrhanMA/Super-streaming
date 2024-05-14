import Image from "next/image";
import Link from "next/link";
export default function HeroBanner({ movie }: { movie: any }) {
  return (
    <div className="flex flex-col items-center sm:flex-row gap-6 md:gap-12">
      <div className="w-[300px]  mb-2 sm:w-1/2 md:w-1/3 lg:w-1/4 md:mb-0">
        <Link href={`/movie/${movie.id}`}>
          <Image
            className="w-full h-auto"
            src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
            width={200}
            height={500}
            alt={movie.title + " poster path"}
          ></Image>
        </Link>
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-2 md:gap-4">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
          {movie.title}
        </h1>
        <h2 className="text-md lg:text-lg font-semibold">#1 Movie today</h2>
        <p className="text-sm md:text-md lg:text-lg">{movie.overview}</p>
        <div className="flex flex-col gap-2 text-sm">
          <p>Release date: {movie.release_date}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
}
