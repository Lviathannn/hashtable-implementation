type Props = {
  result: { name: string; status: string };
  keyword: string;
};

export default function SearchResult({ result, keyword }: Props) {
  return (
    <div className="w-[75%] flex text-white justify-between mt-10 items-center">
      <p>{keyword}</p>
      <p>{result.name}</p>
      <p>{result.status}</p>
    </div>
  );
}
