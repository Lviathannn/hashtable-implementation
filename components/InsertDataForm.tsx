import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  nim: string;
  setNim: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

export default function InsertDataForm({
  handleSubmit,
  nim,
  setNim,
  name,
  setName,
  status,
  setStatus,
}: Props) {
  return (
    <>
      <div className="w-[75%] flex justify-start">
        <h2 className="text-xl font-semibold text-white">
          Tambah Data Dosen / Mahasiswa
        </h2>
      </div>
      <form
        className="w-[75%] flex gap-5 flex-col md:flex-row pt-5"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <Input
            className="!bg-black text-white"
            placeholder="NIM/NIDN"
            value={nim}
            onChange={(e) => {
              setNim(e.target.value);
            }}
            required
          />
        </div>
        <div className="w-full">
          <Input
            className="!bg-black text-white"
            placeholder="NAMA"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="flex gap-5">
          <Select
            value={status}
            onValueChange={(e) => {
              setStatus(e);
            }}
            defaultValue="Mahasiswa"
          >
            <SelectTrigger className="w-[180px] text-white !bg-black">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="!bg-black">
              <SelectItem value="Mahasiswa">Mahasiswa</SelectItem>
              <SelectItem value="Dosen">Dosen</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit">Tambah Data</Button>
        </div>
      </form>
    </>
  );
}
