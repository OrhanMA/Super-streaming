import Link from "next/link";
import SearchBar from "@/components/Searchbar";
import { HeartIcon, VideoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center sm:justify-between gap-6 p-4 bg-slate-100 text-black top-0 z-10">
      <Link className="text-sm hidden md:block" href={"/"}>
        <Button>
          <VideoIcon />
        </Button>
      </Link>
      <SearchBar />
      <div className="gap-4 hidden sm:flex items-center text-xs">
        <Link className="" href={"/popular"}>
          Popular
        </Link>
        <Link className="" href={"/top"}>
          Top
        </Link>
        <Link className="" href={"/upcoming"}>
          Soon
        </Link>
        <Link href={"/favorites"}>
          <HeartIcon />
        </Link>
      </div>
    </div>
  );
}
