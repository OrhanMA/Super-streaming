import MoviesCarousel from "@/components/MoviesCarousel";
import { getMovieSearchResults } from "@/app/actions";
import { MovieData } from "@/app/types";
import HomeBreadcrumb from "@/components/HomeBreadcrumb";
export default async function Search({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const searchResults: MovieData = await getMovieSearchResults(
    searchParams.query
  );

  return (
    <div>
      <div className="px-6">
        <HomeBreadcrumb currentSection={`Search : ${searchParams.query}`} />
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
    </div>
  );
}
