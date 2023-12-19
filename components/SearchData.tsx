import { useState } from "react";
import SearchResult from "./SearchResult";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {
  hashMap: Map<string, { name: string; status: string }> | null;
};

export default function SearchData({ hashMap }: Props) {
  const [keyWord, setKeyWord] = useState("");
  const [result, setresult] = useState<{ name: string; status: string } | null>(
    null
  );
  const [notFound, setnotFound] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hashMap) {
      const data = hashMap.get(keyWord);
      if (data) {
        setnotFound(false);
        setresult(data);
      } else {
        setresult(null);
        setnotFound(true);
      }
    }
  };

  return (
    <>
      <div className="w-[75%] pt-10 flex justify-start">
        <h2 className="text-white text-xl font-semibold ">Cari Data</h2>
      </div>
      <form className="flex gap-5 w-[75%] pt-5" onSubmit={handleSubmit}>
        <Input
          placeholder="NIM / NIDN"
          className="!bg-black text-white"
          value={keyWord}
          onChange={(e) => {
            setKeyWord(e.target.value);
            setresult(null);
            setnotFound(false);
          }}
        />
        <Button type="submit">Search</Button>
      </form>
      {result && <SearchResult result={result} keyword={keyWord} />}
      {notFound && (
        <p className="text-white text-xl font-semibold pt-5">
          Data tidak ditemukan
        </p>
      )}
    </>
  );
}
