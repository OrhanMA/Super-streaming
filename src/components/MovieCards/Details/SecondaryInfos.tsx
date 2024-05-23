import { MovieDetails } from "../../../app/types";
import ProductionCompanies from "./ProductionCompanies";
import ProductionCountries from "./ProductionCountries";
import Link from "next/link";

export default function SecondaryInfos({ movie }: { movie: MovieDetails }) {
  return (
    <div className="w-full mt-8 md:mt-12 flex flex-col gap-6 p-4 md:px-0 2xl:px-24">
      <h2 className="text-lg font-bold lg:text-2xl">More infos:</h2>
      {movie.status && (
        <div>
          <h3 className="text-md lg:text-lg font-semibold mb-2">
            Movie status
          </h3>
          <p>{movie.status}</p>
        </div>
      )}
      {movie.production_companies && (
        <div>
          <h3 className="text-md lg:text-lg font-semibold mb-4">
            Production companies
          </h3>
          <ProductionCompanies companies={movie.production_companies} />
        </div>
      )}
      {movie.production_countries && (
        <div>
          <h3 className="text-md lg:text-lg font-semibold mb-4">
            Production countries
          </h3>
          <ProductionCountries countries={movie.production_countries} />
        </div>
      )}
      {movie.revenue !== 0 && (
        <div>
          <h3 className="text-md lg:text-lg font-semibold mb-4">Revenue</h3>
          <p>{movie.revenue}$</p>
        </div>
      )}
      {movie.homepage && (
        <div>
          <h3 className="text-md lg:text-lg font-semibold mb-4">
            Movie homepage
          </h3>
          <Link className="hover:underline" href={movie.homepage}>
            {movie.homepage}
          </Link>
        </div>
      )}
    </div>
  );
}
