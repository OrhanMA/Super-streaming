import { Card, CardContent } from "@/components/ui/card";
import { Movie } from "@/app/types";
import Image from "next/image";
export function MovieCardPreview({ movie }: { movie: Movie }) {
  return (
    <Card className="bg-transparent border-none">
      <CardContent className="px-2 flex flex-col items-center justify-center gap-4">
        <Image
          src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
          width={300}
          height={400}
          alt={movie.title + " poster path"}
        ></Image>
        <span className="text-center text-slate-200 font-semibold">
          {movie.title}
        </span>
      </CardContent>
    </Card>
  );
}
