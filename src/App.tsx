import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";

type Age = {
  years: number
  months: number
  days: number
}

type Birthday = {
  day: number
  month: number
  year: number
}

function getAge(): Age {
  return {
    years: 0,
    months: 0,
    days: 0
  }
}

function getBirthday(): Birthday {
  return {
    day: 0,
    month: 0,
    year: 0
  }
}

export default function App() {
  const [birthday, setBirthday] = useState(getBirthday())
  const [age, setAge] = useState(getAge())

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    console.log('id: ',e.target.id)
    console.log('value: ',e.target.value)
    // set state for birthday
    // error handling if invalid values:
    //    entire form must be filled out
    //    must be valid day, month, year
    //    fields are required
  }

  function handleFormSubmit(e: FormEvent<HTMLButtonElement>): void {
    // format birthday and Date.now() to timestamp
    // compare to get age as timestamp
    // format age timestamp to years, months, days
    // setAge() to formatted age
    // clear birthday state
  }

  return (
    <>
      <main className="mainContainer">
        <form action="#" className="form">
          <div className="formCard">
            <label htmlFor="day" className="formLabel">
              DAY
            </label>
            <input type="text" placeholder="DD" name="day" id="day" className="formInput" onChange={handleInputChange} />
          </div>
          <div className="formCard">
            <label htmlFor="month" className="formLabel">
              MONTH
            </label>
            <input type="text" placeholder="MM" name="month" id="month" className="formInput" onChange={handleInputChange} />
          </div>
          <div className="formCard">
            <label htmlFor="year" className="formLabel">
              YEAR
            </label>
            <input type="text" placeholder="YYYY" name="year" id="year" className="formInput" onChange={handleInputChange} />
          </div>
        </form>

        <button type="submit" className="submitBtn" onClick={handleFormSubmit}>
          <img src="./icon-arrow.svg" alt="" width="20px" height='20px' />
        </button>

        <section className="ageContainer">
          <p><span>{age.years ? age.years : "--"}</span> years</p>
          <p><span>{age.months ? age.months : "--"}</span> months</p>
          <p><span>{age.days ? age.days : "--"}</span> days</p>
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
