"use client";
import Link from "next/link";
import { useState } from "react";
import FavoriteSkeleton from "./FavoriteSkeleton";
import { useMoviesData, useMoviesLikes } from "@/lib/hooks";
import { FavoriteCard } from "./FavoriteCard";

export default function ClientFavorites() {
  const [isLoading, setLoading] = useState(true);
  const moviesLiked = useMoviesLikes();
  const moviesData = useMoviesData(moviesLiked, setLoading);

  return (
    <ul className="w-full flex justify-center gap-2 md:mt-12 flex-wrap">
      {!isLoading ? (
        <>
          {moviesData && moviesData.length > 0 ? (
            moviesData.map((movie) => (
              <FavoriteCard key={movie.id} movie={movie} />
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
