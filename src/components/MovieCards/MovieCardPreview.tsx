import { Card, CardContent } from "@/components/ui/card";
import { Movie } from "@/app/types";
import Image from "next/image";
export function MovieCardPreview({ movie }: { movie: Movie }) {
  return (
    <Card className="bg-transparent border-none">
      <CardContent className="px-1 flex flex-col items-center justify-center gap-4">
        <Image
          className="object-cover"
          src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
          width={300}
          height={400}
          alt={movie.title + " poster path"}
        ></Image>
      </CardContent>
    </Card>
  );
}
