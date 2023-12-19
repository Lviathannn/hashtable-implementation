import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableComponent({ hashMap }: { hashMap: Map<string, any> }) {
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
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {hashMap.size > 0 &&
            Array.from(hashMap).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className="font-medium ">{key}</TableCell>
                <TableCell className="">{value.name} </TableCell>
                <TableCell className="">{value.status}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
