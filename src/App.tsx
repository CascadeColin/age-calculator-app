import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
import { getAge, getBirthday } from "./assets/types";
import { isDateValid, isDateInTheFuture, leapYearCalculator, calculateAge, currentYear } from "./assets/time";


/* NOTE: x equivalent to dateString, rest equivalent to destructured birthday state */
// const year = "2007"
// const month = "04"
// const day = "10"
// const x = "2007-04-10";
// console.log('leapYearFinder: ', leapYearCalculator(year))
// console.log('calculateAge: ', calculateAge(x))

export default function App() {
  const [birthday, setBirthday] = useState(getBirthday());
  const [age, setAge] = useState(getAge());
  const [error, setError] = useState("");

  // formats birthday to "YYYY-MM-DD" so dayjs can use it
  const dateString = `${birthday.year}-${birthday.month}-${birthday.day}`;

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const unitOfTime = e.target.id;
    let timeValue = e.target.value;
    // converts "1" into "01" for month/day - required by dayjs to use strict checking (YYYY-MM-DD format)
    if (timeValue.length === 1 && unitOfTime !== "year") {
      timeValue = `0${timeValue}`;
      console.log(timeValue);
    }
    setBirthday({ ...birthday, [unitOfTime]: timeValue });
  }

  function handleFormSubmit(e: FormEvent<HTMLButtonElement>): void {
    // see time.ts for pseudocode
    const test = calculateAge(dateString)
    console.log(test)
    const days = ''
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
