import Link from "next/link";
import SearchBar from "@/components/Searchbar";
import { HeartIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center sm:justify-between gap-6 p-6 bg-slate-950 text-slate-200 top-0 sticky z-10">
      <Link className="text-md hidden md:block" href={"/"}>
        Super Streaming
      </Link>
      <SearchBar />
      <div className="gap-4 hidden sm:flex items-center">
        <Link className="text-sm" href={"/popular"}>
          Popular
        </Link>
        <Link className="text-sm" href={"/top"}>
          Top rated
        </Link>
        <Link className="text-sm" href={"/upcoming"}>
          Upcoming
        </Link>
        <Link href={"/favorites"}>
          <HeartIcon />
        </Link>
      </div>
    </div>
  );
}
