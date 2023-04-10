import { Age } from "./types";

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

// takes in birthday and returns "age" based on how far in the past that date is
export function calculateAge(date: string): string {
  const year = dayjs().diff(dayjs(date), "year");
  const month = dayjs().diff(dayjs(date), "month");
  const day = dayjs().diff(dayjs(date), "day");
  
  /* How do I accurately get the number of days, factoring in months being 28,29,30,or 31 days? */
  const remainderMonths = month % year;
  console.log("remainder months: ", remainderMonths);

  // breaking down the data needed to analyze now
  const nowFullDate = dayjs().format("YYYY-MM-DD");
  const nowYear = dayjs().format("YYYY");
  const nowMonth = dayjs().format("MM");
  const nowDay = dayjs().format("DD");
  console.log("nowFull: ", nowFullDate);
  console.log(`nowYear, nowMonth, nowDay: `, nowYear, nowMonth, nowDay)

  // breaking down the data needed to analyze birthday
  const birthdayFullDate = dayjs(date, "YYYY-MM-DD", true).format("YYYY-MM-DD");
  const birthdayYear = dayjs(date, "YYYY-MM-DD", true).format("YYYY");
  const birthdayMonth = dayjs(date, "YYYY-MM-DD", true).format("MM");
  const birthdayDay = dayjs(date, "YYYY-MM-DD", true).format("DD");
  console.log("birthdayFull: ", birthdayFullDate);
  console.log(`birthdayYear, birthdayMonth, birthdayDay: `, birthdayYear,birthdayMonth, birthdayDay)
  
  // gets the # of days in a particular month
  console.log(`days in ${nowFullDate}: `, dayjs(nowFullDate).daysInMonth());
  console.log(`diff in years, months, and days: `,year, month, day);
}

// formats user supplied age to years, months, and days for display in client
export function formatAge(date: string): Age {}

// takes it birthday.year state and calculates the number of leap years between birthday and now
// NOTE: Don't think this is needed.  diff() factors in leap years already
// export function leapYearCalculator(year: string): number {
//   let currentYear = Number(dayjs().format("YYYY"));
//   const endYear = Number(year);
//   let numLeapYears: number = 0;

//   while (endYear < currentYear) {
//     // returns true if currentYear is a leap year
//     const bool = dayjs(currentYear.toString()).isLeapYear();
//     if (bool === true) {
//       numLeapYears += 1;
//     }
//     currentYear -= 1;
//   }
//   return numLeapYears;
// }

// evaluates the number of days in each remainder month to get an accurate days count
export function convertRemainderMonthsToDays(months: string): string {}

export const currentYear = dayjs().format("YYYY");

export const dateLogic = {
  // export functions as module if it gets too big
};
