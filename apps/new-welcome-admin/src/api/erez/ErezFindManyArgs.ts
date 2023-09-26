import { ErezWhereInput } from "./ErezWhereInput";
import { ErezOrderByInput } from "./ErezOrderByInput";

export type ErezFindManyArgs = {
  where?: ErezWhereInput;
  orderBy?: Array<ErezOrderByInput>;
  skip?: number;
  take?: number;
};
