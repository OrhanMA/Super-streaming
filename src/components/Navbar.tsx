import Link from "next/link";
import SearchBar from "@/components/Searchbar";
import { HeartIcon, VideoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center sm:justify-between gap-6 p-4 bg-stone-900 text-stone-100 top-0 z-10">
      <Link className="text-sm hidden md:block" href={"/"} id="home">
        <Button className="bg-stone-700" aria-label="Home">
          <VideoIcon />
        </Button>
      </Link>
      <SearchBar />
      <div className="gap-4 hidden sm:flex items-center text-xs md:text-md">
        <Link className="" href={"/popular"}>
          Popular
        </Link>
        <Link className="" href={"/top"}>
          Top
        </Link>
        <Link className="" href={"/upcoming"}>
          Soon
        </Link>
        <Link href={"/favorites"} id="favorites" aria-label="Favorites">
          <HeartIcon />
        </Link>
      </div>
    </div>
  );
}
