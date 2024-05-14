import { MovieDetails } from "@/app/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MovieCard({ movie }: { movie: MovieDetails }) {
  return (
    <Card className="p-6">
      <CardTitle>{movie.title}</CardTitle>
      <CardHeader>
        <ul className="flex gap-2 mb-4">
          {movie.genres.map((genre: { id: number; name: string }) => {
            return (
              <li key={genre.id}>
                <Badge>{genre.name}</Badge>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-8">
          <p>Released: {movie.release_date}</p>
          <p>Duration: {movie.runtime}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-6">
        <CardDescription>{movie.overview}</CardDescription>
      </CardContent>
    </Card>
  );
}
