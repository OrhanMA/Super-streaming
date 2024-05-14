import { searchMovie } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default async function SearchBar() {
  return (
    <form className="flex gap-4" action={searchMovie}>
      <Input type="text" name="query" placeholder="Spiderman" />
      <Button>search</Button>
    </form>
  );
}
