import { Card, CardContent } from "@/components/ui/card";
import { Movie } from "@/app/types";
export function MovieCardPreview({ movie }: { movie: Movie }) {
  return (
    <div className="p-1">
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-2xl font-semibold">{movie.title}</span>
        </CardContent>
      </Card>
    </div>
  );
}
