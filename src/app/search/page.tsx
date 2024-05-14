import MoviesCarousel from "@/components/MoviesCarousel";
import { getMovieSearchResults } from "@/app/actions";
import { MovieData } from "@/app/types";

export default async function Search({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const searchResults: MovieData = await getMovieSearchResults(
    searchParams.query
  );

  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <div className="px-6">
        {searchResults.results.length > 0 ? (
          <>
            <h1 className="text-2xl font-bold mb-6">
              Search results for: {searchParams.query}
            </h1>
            <MoviesCarousel movies={searchResults} />
          </>
        ) : (
          <h1 className="text-2xl font-bold mb-6">
            No movie results for: {searchParams.query}
          </h1>
        )}
      </div>
    </main>
  );
}
