import { useState, ChangeEvent, FormEvent } from "react";
import { getAge, getBirthday } from "./helpers/types";
import { calculateAge } from "./helpers/time";
import {
  isDateValid,
  isDateInTheFuture,
  isDateComplete,
  dayValueValidation,
  monthValueValidation,
  isYearValid,
} from "./helpers/validation";
import "./App.css";

/* TODO: styling: 
  1) View the optimal layout for the interface depending on their device's screen size
  2) See hover and focus states for all interactive elements on the page
*/

export default function App() {
  const [birthday, setBirthday] = useState(getBirthday());
  const [age, setAge] = useState(getAge());
  const [error, setError] = useState("");
  console.log("refresh works");

  // formats birthday to "YYYY-MM-DD" so dayjs can use it
  // TODO: validate `birthday` to make sure they are defined
  // NOTE: run through a validation function in `validation.ts`
  const dateString = `${birthday.year}-${birthday.month}-${birthday.day}`;

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const unitOfTime: string = e.target.id;
    let timeValue: string = e.target.value;
    // converts "1" into "01" for month/day - required by dayjs to use strict checking (YYYY-MM-DD format)
    if (timeValue.length === 1 && unitOfTime !== "year") {
      timeValue = `0${timeValue}`;
    }
    setBirthday({ ...birthday, [unitOfTime]: timeValue });
  }

  function handleFormSubmit(e: FormEvent<HTMLButtonElement>): void {
    /* View an age in years, months, and days after submitting a valid date through the form
    NOTE: Receive validation errors if:
    1) Any field is empty when the form is submitted (isDateComplete)
    2) The day number is not between 1-31 & The date is invalid (dayValueValidation)
    3) The month number is not between 1-12 (monthValueValidation)
    4) The year is in the future (isYearValid)
    */

    // see time.ts for pseudocode
    const age = calculateAge(dateString);
    setAge(age);
    /* NOTE: dates formatted as: YYYY-MM-DD */
    // format birthday and Date.now()
    // compare to get age as timestamp
    // format age timestamp to years, months, days
    // setAge() to formatted age
    // clear birthday state
    // error handling if invalid values:
    //    date must be in the past
    //    entire form must be filled out
    //    must be valid day, month, year
    //    fields are required
  }

  return (
    <>
      <main className="mainContainer">
        <form action="#" className="form">
          <div className="formCard">
            <label htmlFor="day" className="formLabel">
              DAY
            </label>
            <input
              type="number"
              placeholder="DD"
              name="day"
              id="day"
              className="formInput"
              onChange={handleInputChange}
            />
          </div>
          <div className="formCard">
            <label htmlFor="month" className="formLabel">
              MONTH
            </label>
            <input
              type="number"
              placeholder="MM"
              name="month"
              id="month"
              className="formInput"
              onChange={handleInputChange}
            />
          </div>
          <div className="formCard">
            <label htmlFor="year" className="formLabel">
              YEAR
            </label>
            <input
              type="number"
              placeholder="YYYY"
              name="year"
              id="year"
              className="formInput"
              onChange={handleInputChange}
            />
          </div>
        </form>

        <button type="submit" className="submitBtn" onClick={handleFormSubmit}>
          <img src="./icon-arrow.svg" alt="" width="20px" height="20px" />
        </button>

        <section className="ageContainer">
          <p>
            <span>{age.years ? age.years : "--"}</span> years
          </p>
          <p>
            <span>{age.months ? age.months : "--"}</span> months
          </p>
          <p>
            <span>{age.days ? age.days : "--"}</span> days
          </p>
        </section>
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">CascadeColin</a>.
      </footer>
    </>
  );
}
