import { getMovieSearchResults } from "@/app/actions";
import { MovieData } from "@/app/types";
import HomeBreadcrumb from "@/components/Navigation/HomeBreadcrumb";
import MovieCategoryGrid from "@/components/MovieCards/MovieCategoryGrid";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Super Streaming - Search Results",
};
export default async function Search({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const searchResults: MovieData = await getMovieSearchResults(
    searchParams.query
  );

  const sortedByPopularity = searchResults.results.sort(
    (a, b) => a.vote_average - b.vote_average
  );
  searchResults.results = sortedByPopularity;
  return (
    <div>
      <div className="px-6">
        <HomeBreadcrumb currentSection={`Search : ${searchParams.query}`} />
        <h1 className="text-2xl font-bold my-6">
          Search results for: {searchParams.query}
        </h1>
        {searchResults.results.length > 0 ? (
          <>
            <MovieCategoryGrid
              detailed={false}
              movies={{ ...searchResults, results: sortedByPopularity }}
            />
          </>
        ) : (
          <h2 className="text-xl font-bold my-6">
            No movie results for: {searchParams.query}
          </h2>
        )}
      </div>
    </div>
  );
}
