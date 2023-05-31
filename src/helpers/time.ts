import { Age } from "./types";
// makes working with dates easier
import * as dayjs from "dayjs";
// import dayjs from 'dayjs/esm/index.js'
// dayjs plugins
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);
import isLeapYear from "dayjs/plugin/isLeapYear";
dayjs.extend(isLeapYear);

// takes in birthday and returns "age" based on how far in the past that date is
export function calculateAge(date: string): Age {
  const year = dayjs().diff(dayjs(date), "year");
  const month = dayjs().diff(dayjs(date), "month");
  const day = dayjs().diff(dayjs(date), "day");

  /* How do I accurately get the number of days, factoring in months being 28,29,30,or 31 days? */
  // where months = total number of months from inputted date to now
  const remainderMonths = (month % 12).toString();

  /* imperfect but close solution is:
    total days - (total years * 365.25) - (remainder months * 30)
    WHERE 365.25 is days in a year accounting for leap years AND
    WHERE 30 is the avg number of days in a month
    How can I get more precise than simply averaging the days in a month?
  */
  const notPreciseDays = Math.floor(day-(365.25*year)-(30*parseInt(remainderMonths))).toString();

  return {
    years: year.toString(),
    months: remainderMonths.toString(),
    days: notPreciseDays,
  };
}