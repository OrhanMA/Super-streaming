import Image from "next/image";
export default function HeroBanner({ movie }: { movie: any }) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3 mb-2 md:mb-0">
        <Image
          className="w-full h-auto"
          src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
          width={200}
          height={500}
          alt={movie.title + " poster path"}
        ></Image>
      </div>
      <div className="w-full md:w-2/3 flex flex-col pt-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">{movie.title}</h1>
        <h2 className="text-lg font-semibold mb-4">#1 Movie today</h2>
        <div className="flex flex-col gap-2">
          <p>Release date: {movie.release_date}</p>
          <p>Popularity: {movie.popularity}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
        <p className="mt-6 text-lg">{movie.overview}</p>
      </div>
    </div>
  );
}
