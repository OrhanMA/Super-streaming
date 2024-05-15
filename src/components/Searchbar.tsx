import { searchMovie } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default async function SearchBar() {
  return (
    <form className="w-full flex gap-4" action={searchMovie}>
      <Input
        type="text"
        name="query"
        className="text-black text-xs h-8 max-w-[400px]"
        placeholder="Spiderman"
      />
      <Button className="bg-slate-950 text-white text-xs h-8">search</Button>
    </form>
  );
}
