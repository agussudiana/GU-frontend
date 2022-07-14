import { format } from "date-fns";

export const timestampToDate = (timestamp: any) => {
  return format(new Date(timestamp), "dd-MM-yyyy HH:mm");
};
