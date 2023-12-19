import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";

export function TableComponent({
  hashMap,
  setResult,
}: {
  hashMap: Map<string, any>;
  setResult: React.Dispatch<React.SetStateAction<any>>;
}) {
  const handleDelete = (keyword: string) => {
    const newMap = new Map(hashMap);
    newMap.delete(keyword);
    setResult(newMap);
  };

  return (
    <div className="w-[75%] pt-20">
      <Table className="text-white">
        {hashMap.size == 0 && (
          <TableCaption className="text-white text-lg">
            Data Masih Kosong
          </TableCaption>
        )}
        <TableHeader>
          <TableRow className="w-full">
            <TableHead className="">NIM/NIDN</TableHead>
            <TableHead className="">Nama</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {hashMap.size > 0 &&
            Array.from(hashMap).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className="font-medium ">{key}</TableCell>
                <TableCell className="">{value.name} </TableCell>
                <TableCell className="">{value.status}</TableCell>
                <TableCell className="flex gap-3">
                  <Button
                    size="icon"
                    className="!bg-red-600 !text-white"
                    onClick={() => {
                      handleDelete(key);
                    }}
                  >
                    <Trash2Icon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
