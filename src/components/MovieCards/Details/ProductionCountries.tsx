export default function ProductionCountries({
  countries,
}: {
  countries: {
    name: string;
  }[];
}) {
  return (
    <ul>
      {countries.map((country, index) => {
        return (
          <li key={index} className="flex gap-2 items-center">
            {country.name}
            {"  "}
          </li>
        );
      })}
    </ul>
  );
}
