"use client";
import Image from "next/image";
import Link from "next/link";
import LikeButton from "@/components/LikeButton";
import { useEffect, useState } from "react";
import { getMovieDetails } from "@/app/actions";
import { MovieDetails } from "@/app/types";
import { Skeleton } from "./ui/skeleton";
import FavoriteSkeleton from "./FavoriteSkeleton";

export default function ClientFavorites() {
  const [isLoading, setLoading] = useState(true);
  // tableau vide de base
  const [moviesLiked, setMoviesLiked] = useState<MovieDetails[]>([]);
  const [moviesData, setMoviesData] = useState<null | MovieDetails[]>([]);

  useEffect(() => {
    // 1er effect vérifie window, et set movieslikes avec le contenu du localstorage is la clé est définie
    if (typeof window !== undefined) {
      const storedMovies = localStorage.getItem("movies");
      if (storedMovies) {
        setMoviesLiked(JSON.parse(storedMovies));
      }
    }
  }, []);

  useEffect(() => {
    // 2nd effect récupère à l'aide des données du localstorage les données par appel API et set le tableau dans moviesdata
    async function getMoviesData() {
      const data: MovieDetails[] = [];
      for (const movie of moviesLiked) {
        const movieData = await getMovieDetails(movie.id);
        data.push(movieData);
      }
      setMoviesData(data);
    }
    if (moviesLiked.length > 0) {
      getMoviesData();
    }
    setLoading(false);
  }, [moviesLiked]);

  return (
    <ul className="w-full flex justify-center gap-2 flex-wrap">
      {!isLoading ? (
        <>
          {moviesData && moviesData.length > 0 ? (
            moviesData.map((movie) => (
              <li
                className="m-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-transparent border-none flex flex-col justify-center items-center overflow-hidden gap-2"
                key={movie.id}
              >
                <Link href={`/movie/${movie.id}`}>
                  <Image
                    className="w-full max-w-[300px] object-cover"
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt="test"
                    width={500}
                    height={700}
                  />
                </Link>
                <LikeButton
                  classNames="w-full rounded-none bg-red-800"
                  movie={movie}
                />
              </li>
            ))
          ) : (
            <div className="w-full flex flex-col items-center mt-8">
              <p className="text-lg">You don&apos;t have any favorites yet.</p>
              <Link href="/">Go to homepage</Link>
            </div>
          )}
        </>
      ) : (
        <FavoriteSkeleton />
      )}
    </ul>
  );
}
