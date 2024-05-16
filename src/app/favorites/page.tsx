import ClientFavorites from "@/components/ClientFavorites";
import HomeBreadcrumb from "@/components/HomeBreadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Super Streaming - Your Favorites Movies",
};

export default function Favorites() {
  return (
    <div>
      <HomeBreadcrumb currentSection="Favorites" />
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold my-6">
        Your favorites movies
      </h1>
      <ClientFavorites />
    </div>
  );
}
