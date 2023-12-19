import { HashTable } from "@/types";

export const createHashTable = (size: number): HashTable => {
  const table: Array<Array<{ key: string; value: string }>> = new Array(size);

  const hashFunction = (key: string): number => {
    return key.length % size;
  };

  const insert = (key: string, value: string): void => {
    const index = hashFunction(key);
    if (!table[index]) {
      table[index] = [{ key, value }];
    } else {
      table[index].push({ key, value });
    }
  };

  const search = (key: string): string | null => {
    const index = hashFunction(key);
    if (table[index]) {
      const pair = table[index].find((entry) => entry.key === key);
      return pair ? pair.value : null;
    }
    return null;
  };

  return { insert, search, table };
};
