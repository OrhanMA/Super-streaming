import { MovieDetails } from "@/app/types";

export function MovieCard({ movie }: { movie: MovieDetails }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <ul>
        {movie.genres.map((genre: { id: number; name: string }) => {
          return <li key={genre.id}>{genre.name}</li>;
        })}
      </ul>
      <p>{movie.release_date}</p>
      <p>{movie.runtime}</p>
      <p>{movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  );
}
