"use client";
import { useState } from "react";
import { TableComponent } from "./TableComponent";
import InsertDataForm from "./InsertDataForm";
import SearchData from "./SearchData";

type Props = {};

export default function HashTableApp({}: Props) {
  const [data, setData] = useState(new Map());
  const [nim, setNim] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Mahasiswa");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hashMap = new Map(data);
    hashMap.set(nim, { name, status });
    setData(hashMap);
    setNim("");
    setName("");
    setStatus("Mahasiswa");
  };
  return (
    <div className=" flex justify-center flex-col items-center pt-10">
      <InsertDataForm
        handleSubmit={handleSubmit}
        nim={nim}
        setNim={setNim}
        name={name}
        setName={setName}
        status={status}
        setStatus={setStatus}
      />
      <SearchData hashMap={data} />
      <TableComponent hashMap={data} setResult={setData} />
    </div>
  );
}
