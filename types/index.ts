export type HashTable = {
  insert: (key: string, value: string) => void;
  search: (key: string) => string | null;
  table: Array<Array<{ key: string; value: string }>>;
};
