"use client";

import { useEffect, useState } from "react";
import { getMovieDetails } from "../actions";
import { MovieDetails } from "../types";
import Image from "next/image";
import Link from "next/link";

export default function Favorites() {
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
  }, [moviesLiked]);

  return (
    <div>
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
        Your favorites movies
      </h1>
      <ul className="w-full flex justify-center gap-2 flex-wrap">
        {moviesData &&
          moviesData.length > 0 &&
          moviesData.map((movie) => {
            return (
              <Link
                href={`/movie/${movie.id}`}
                className="m-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-transparent border-none flex justify-center overflow-hidden"
                key={movie.id}
              >
                {/* <CardHeader>
                  <CardTitle className="text-center">{movie.title}</CardTitle>
                </CardHeader> */}

                <Image
                  className="w-full max-w-[300px] object-cover "
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="test"
                  // fill={true}
                  width={500}
                  height={300}
                ></Image>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}
