import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getMovieDetails } from "@/app/actions";
import { MovieDetails } from "@/app/types";
export function useMoviesLikes() {
  const [moviesLiked, setMoviesLiked] = useState<MovieDetails[]>([]);
  useEffect(() => {
    if (typeof window !== undefined) {
      const storedMovies = localStorage.getItem("movies");
      if (storedMovies) {
        setMoviesLiked(JSON.parse(storedMovies));
      }
    }
  }, []);
  return moviesLiked;
}

export function useMoviesData(
  moviesLiked: MovieDetails[],
  setLoading: Dispatch<SetStateAction<boolean>>
) {
  const [moviesData, setMoviesData] = useState<null | MovieDetails[]>([]);
  useEffect(() => {
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
  }, [moviesLiked, setLoading]);
  return moviesData;
}
