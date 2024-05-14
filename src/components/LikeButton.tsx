"use client";
import { MovieDetails } from "@/app/types";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function LikeButton({ movie }: { movie: MovieDetails }) {
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
      // Movie already liked, remove it
      const newMovieArray = [
        ...currentMoviesLikes.slice(0, movieIndex),
        ...currentMoviesLikes.slice(movieIndex + 1),
      ];
      localStorage.setItem("movies", JSON.stringify(newMovieArray));
      setLiked(false);
      // Add toast for removal
    } else {
      // Movie not liked, add it
      const newMovieArray = [
        ...currentMoviesLikes,
        { title: movie.title, id: movie.id },
      ];
      localStorage.setItem("movies", JSON.stringify(newMovieArray));
      setLiked(true);
      // Add toast for addition
    }
  }
  return (
    <Button
      variant={liked ? "destructive" : "secondary"}
      onClick={() => {
        handleMovieLike();
      }}
    >
      {liked ? "Remove from favorites" : "Add to favorites"}
    </Button>
  );
}
