import Link from "next/link";
import { MovieDetails, Movie, MovieData } from "@/app/types";
import { Card, CardContent } from "@/components/ui/card";
import { MovieCardPreview } from "@/components/MovieCardPreview";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MoviesCarousel({
  movies,
  category,
}: {
  movies: MovieData;
  category?: string;
}) {
  return (
    <div className="w-full flex flex-col gap-6">
      {category && <h3 className="text-2xl font-bold">{category}</h3>}
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {movies.results.map((movie: Movie) => (
            <CarouselItem
              key={movie.id}
              className="pl-1 md:basis-1/3 lg:basis-1/5"
            >
              <Link href={`/movie/${movie.id}`}>
                <MovieCardPreview movie={movie} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
