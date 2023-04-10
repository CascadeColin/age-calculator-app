import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
import { getAge, getBirthday } from "./assets/types";
import { isDateValid, isDateInTheFuture, currentYear } from "./assets/time";

const x = "2023-04-08";
console.log("isValidDate: ",isDateValid(x));
console.log("isDateInThePast: ",isDateInTheFuture(x))
console.log(currentYear);

export default function App() {
  const [birthday, setBirthday] = useState(getBirthday());
  const [age, setAge] = useState(getAge());
  const [error, setError] = useState("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const unitOfTime = e.target.id
    const timeValue = e.target.value
    console.log("id: ", unitOfTime);
    console.log("value: ", timeValue);
    // set state for birthday
  }

  function handleFormSubmit(e: FormEvent<HTMLButtonElement>): void {
    console.log("button works")
    /* NOTE: dates formatted as: YYYY-MM-DD */
    // format birthday and Date.now() to timestamp
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
