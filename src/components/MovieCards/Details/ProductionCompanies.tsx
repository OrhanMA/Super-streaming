import Image from "next/image";
export default function ProductionCompanies({
  companies,
}: {
  companies: {
    id: number;
    origin_country: string;
    name: string;
    logo_path: string;
  }[];
}) {
  return (
    <ul>
      {companies.map((company) => {
        return (
          <li key={company.id} className="flex gap-2 items-center">
            <p>
              {company.name} - {company.origin_country}
            </p>
            {company.logo_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w45${company.logo_path}`}
                alt={`${company.name} logo`}
                width={45}
                height={45}
              ></Image>
            )}
          </li>
        );
      })}
    </ul>
  );
}
