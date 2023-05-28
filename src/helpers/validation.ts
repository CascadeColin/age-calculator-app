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

export function isDateComplete(date: string): boolean {
    // return true if all form entries are completed, else false
    // IMPLEMENT: setError("please enter a complete date") in handleFormSubmit if false is returned
}

export function dayValueValidation(date: string): boolean {
    // return true if day is between 1 and 31, otherwise false
    // detect the month and its associated # of days for more precise validation
    // IMPLEMENT: setError("please enter a valid day of the month") if value is out of bounds
}

export function monthValueValidation(date: string): boolean {
    // return true if month is between 1 and 12, otherwise false
    // IMPLEMENT: setError("please enter a valid month of the year") if value is out of bounds
}

export function isYearValid(date: string): boolean {
    // return true if year is <= currentYear, false if year is in the future
    // IMPLEMENT: setError("please enter a date in the past!") if false
}

