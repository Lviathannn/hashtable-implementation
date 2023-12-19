import SearchResult from "./SearchResult";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {};

export default function SearchData({}: Props) {
  return (
    <>
      <div className="w-[75%] pt-10 flex justify-start">
        <h2 className="text-white text-xl font-semibold ">Cari Data</h2>
      </div>
      <form className="flex gap-5 w-[75%] pt-5">
        <Input placeholder="Key" className="!bg-black text-white" />
        <Button>Search</Button>
      </form>
      <SearchResult />
    </>
  );
}
