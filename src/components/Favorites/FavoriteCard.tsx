import Link from "next/link";
import Image from "next/image";
import LikeButton from "./LikeButton";
export function FavoriteCard(movie: any) {
  const movieData = movie.movie;

  return (
    <li
      className="w-full sm:w-1/3 md:w-1/4 md:m-2 lg:w-1/6 bg-transparent border-none flex flex-col justify-center items-center overflow-hidden gap-2"
      key={movieData.id}
    >
      <Link href={`/movie/${movieData.id}`}>
        <Image
          className="w-full max-w-[300px] object-cover"
          src={`https://image.tmdb.org/t/p/w342${movieData.poster_path}`}
          alt="test"
          width={500}
          height={700}
        />
      </Link>
      <LikeButton
        classNames="rounded-none bg-red-800 text-white rounded-md"
        movie={movie}
      />
    </li>
  );
}
