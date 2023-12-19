import HashTableApp from "@/components/HashTableApp";

export default function Home() {
  return (
    <main className="px-5 sm:px-10 lg:px-20 min-h-screen bg-black py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">
            Hash Table Record Implementation With Next js and Typescript
          </h1>

          <p className="text-white text-center mb-4">
            Dibuat Oleh Muhammad Asrul Rifa Anwar (21110142) untuk Memenuhi
            Tugas Sistem Informasi Manajemen yang di ampu oleh bapak Jajat
            Sudrajat M.Kom
          </p>
        </div>
      </div>
      <HashTableApp />
    </main>
  );
}
