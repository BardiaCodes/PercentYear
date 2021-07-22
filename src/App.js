import logo from "./logo.svg";
import "./App.css";

function App() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let startOfYear = new Date(currentYear, 0, 0);
  let difference = currentDate - startOfYear;
  let dayOfYear = Math.floor(difference / 86400000);
  let numberOfDaysInYear = currentYear % 4 == 0 ? 366 : 365;
  let percentOfYear = ((dayOfYear / numberOfDaysInYear) * 100).toFixed(2);

  return (
    <div className="App">
      <h1>
        {currentYear} is <h1 className="blueText">{percentOfYear}%</h1> over.
      </h1>
    </div>
  );
}

export default App;
