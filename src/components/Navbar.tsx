import Link from "next/link";
import SearchBar from "@/components/Searchbar";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between gap-6 p-6 bg-slate-200 text-black top-0 sticky z-10">
      <Link href={"/"}>Super Streaming</Link>
      <SearchBar />
      <div className="flex gap-4">
        <Link href={"/popular"}>Popular</Link>
        <Link href={"/top"}>Top rated</Link>
        <Link href={"/upcoming"}>Upcoming</Link>
      </div>
    </div>
  );
}
