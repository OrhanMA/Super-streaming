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
import Image from "next/image";

export function MovieCard({ movie }: { movie: MovieDetails }) {
  return (
    <Card className="bg-transparent border-none text-slate-200 flex flex-col items-center">
      <CardTitle>{movie.title}</CardTitle>
      <CardHeader>
        <div className="w-full flex justify-center sm:justify-start mb-4">
          <Image
            className="max-h-[400px] object-cover"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="test"
            // fill={true}
            width={500}
            height={300}
          ></Image>
        </div>
        <ul className="flex gap-2">
          {movie.genres.map((genre: { id: number; name: string }) => {
            return (
              <li key={genre.id}>
                <Badge className="bg-slate-800">{genre.name}</Badge>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-8">
          <p>Released: {movie.release_date}</p>
          <p>Duration: {movie.runtime} minutes</p>
          <p>Rating: {movie.vote_average}/10</p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-6">
        <CardDescription className="max-w-[500px] text-slate-200">
          {movie.overview}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
