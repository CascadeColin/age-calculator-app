// makes working with dates easier
import * as dayjs from "dayjs";
// dayjs plugins
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
import isLeapYear from "dayjs/plugin/isLeapYear";
dayjs.extend(isLeapYear);

export function isDateValid(date: string): boolean {
  return dayjs(date, "YYYY-MM-DD", true).isValid();
}

// toggles if date is prior to current calendar date
export function isDateInTheFuture(date: string): boolean {
  return dayjs(date).isAfter(dayjs().subtract(1, "day"));
}
