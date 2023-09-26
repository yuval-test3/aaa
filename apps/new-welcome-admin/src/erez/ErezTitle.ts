import { Erez as TErez } from "../api/erez/Erez";

export const EREZ_TITLE_FIELD = "id";

export const ErezTitle = (record: TErez): string => {
  return record.id?.toString() || String(record.id);
};
