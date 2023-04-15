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
export function calculateAge(date: string): Age {
  const year = dayjs().diff(dayjs(date), "year");
  const month = dayjs().diff(dayjs(date), "month");
  const day = dayjs().diff(dayjs(date), "day");

  /* How do I accurately get the number of days, factoring in months being 28,29,30,or 31 days? */
  // where months = total number of months from inputted date to now
  const remainderMonths = month % 12;
  console.log("remainder months: ", remainderMonths);

  const currentFullDate = dayjs().format("YYYY-MM-DD");
  const birthdayFullDate = dayjs(date, "YYYY-MM-DD", true).format("YYYY-MM-DD");
  convertRemainderMonthsToDays(
    birthdayFullDate,
    currentFullDate,
    remainderMonths
  );

  console.log(`diff in years, months, and days: `, year, month, day);
  console.log(" ");

  return {
    years: year.toString(),
    months: remainderMonths.toString(),
    days: "-1",
  };
}

// evaluates the number of days in each remainder month to get an accurate days count
export function convertRemainderMonthsToDays(
  birthday: string,
  current: string,
  remainderMonths: string
) {
  const birthdayYear = dayjs(birthday, "YYYY-MM-DD", true).format("YYYY");
  const birthdayMonth = dayjs(birthday, "YYYY-MM-DD", true).format("MM");
  const birthdayDay = dayjs(birthday, "YYYY-MM-DD", true).format("DD");
  console.log("birthdayFullDate: ", birthday);
  console.log(
    `birthdayYear, birthdayMonth, birthdayDay: `,
    birthdayYear,
    birthdayMonth,
    birthdayDay
  );

  const currentYear = dayjs(current).format("YYYY");
  const currentMonth = dayjs(current).format("MM");
  const currentDay = dayjs(current).format("DD");
  console.log("currentFullDate: ", current);
  console.log(
    `currentYear, currentMonth, currentDay: `,
    currentYear,
    currentMonth,
    currentDay
  );

  // take remainderMonths and run daysInMonth() on those months to get the # of days in those months.  Then, compare that to how many days are unaccounted for when subtracting years and months to get the "days" value for display
  /* EXAMPLE */
  // gets the # of days in a particular month
  console.log(`days in ${current}: `, dayjs(current).daysInMonth());

  // use remainderMonths to create an array of months?
  console.log(remainderMonths);

  // get remainder days
  // FIXME: what if they are equal?

  if (birthdayDay > currentDay && birthdayMonth < currentMonth) {
    // example: 2023-04-15 (current) vs. 2011-03-18 (birthday)
    // answer: 28 days
  } else if (birthdayDay > currentDay && birthdayMonth > currentMonth) {
    // example: 2023-04-15 (current) vs. 2011-06-18 (birthday)
    // remainderMonths = 9
    // count up months -> 7, 8, 9, 10, 11, 12, 1, 2, 3 -> 9 months
    // dayjs(7).daysInMonth() = ... -> run this for each month
    // 9 months = X number of days -> dynamic based on months in question
    // add the extra days in because birthdayDay > currentDay?
  } else if (birthdayDay < currentDay && birthdayMonth < currentMonth) {
    // example: 2023-04-15 (current) vs. 2011-03-10 (birthday)
    // remainderMonths = 1
    // count down months -> 4, 3
    // run daysInMonth() to detect days in those months
    // subtract extra days because birthdayDay < currentDay
  } else if (birthdayDay < currentDay && birthdayMonth > currentMonth) {
    // example: 2023-04-15 (current) vs. 2011-06-10 (birthday)
    // 12 - (birthdayMonth - currentMonth) = remainderMonth
    // remainderMonths = 10
    // count up months -> 7,8,9,10,11,12,1,2,3,4 -> 10 months
    // dayjs(7).daysInMonth() = ... -> run this for each month
    // 9 months = X number of days -> dynamic based on months in question
    // add the extra days in because birthdayDay > currentDay?
  } else {
    throw new Error("Error in days calculator function.");
  }
}

export const currentYear = dayjs().format("YYYY");

export const dateLogic = {
  // export functions as module if it gets too big
};
