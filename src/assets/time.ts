// makes working with dates either
import * as dayjs from "dayjs";

// sets strict mode for date validation
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export function isDateValid(date: string): boolean {
  return dayjs(date, "YYYY-MM-DD", true).isValid();
}

// toggles if date is prior to current calendar date
export function isDateInTheFuture(date: string): boolean {
  return dayjs(date).isAfter(dayjs().subtract(1, "day"));
}

export const currentYear = dayjs().format("YYYY");

export const time = {
  // export functions as module if it gets too big
};
