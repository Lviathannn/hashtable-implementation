import { Trash } from "lucide-react";
import { Button } from "./ui/button";

type Props = {};

export default function SearchResult({}: Props) {
  return (
    <div className="w-[75%] flex text-white justify-between mt-10 items-center">
      <p>21110142</p>
      <p>Muhammad Asrul</p>
      <p>Mahasiswa</p>
      <Button>
        <Trash size={20} />
      </Button>
    </div>
  );
}
