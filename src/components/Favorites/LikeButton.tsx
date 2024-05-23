"use client";
import { MovieDetails } from "../../app/types";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function LikeButton({
  movie,
  classNames,
}: {
  movie: MovieDetails;
  classNames?: string;
}) {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    const currentMoviesLikes = JSON.parse(
      localStorage.getItem("movies") || "[]"
    );
    const movieExists = currentMoviesLikes.find(
      (storedMovie: { id: number; title: string }) =>
        storedMovie.id === movie.id
    );
    setLiked(movieExists !== undefined);
  }, [movie.id]);
  function handleMovieLike() {
    const currentMoviesLikes = JSON.parse(
      localStorage.getItem("movies") || "[]"
    );
    const movieIndex = currentMoviesLikes.findIndex(
      (storedMovie: { id: number }) => storedMovie.id === movie.id
    );

    if (movieIndex !== -1) {
      const newMovieArray = [
        ...currentMoviesLikes.slice(0, movieIndex),
        ...currentMoviesLikes.slice(movieIndex + 1),
      ];
      localStorage.setItem("movies", JSON.stringify(newMovieArray));
      setLiked(false);
    } else {
      const newMovieArray = [
        ...currentMoviesLikes,
        { title: movie.title, id: movie.id },
      ];
      localStorage.setItem("movies", JSON.stringify(newMovieArray));
      setLiked(true);
    }
  }

  const classes = twMerge(classNames);
  return (
    <Button
      className={classes}
      variant={liked ? "destructive" : "secondary"}
      onClick={() => {
        handleMovieLike();
      }}
    >
      {liked ? "Remove from favorites" : "Add to favorites"}
    </Button>
  );
}
