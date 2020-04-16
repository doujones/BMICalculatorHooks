import React from "react";
import "./styles.css";
import BmiCalculator from "./components/BmiCalculator";

const App = () => {
  return (
    <div className="App">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-lg-offset-3">
          <BmiCalculator />
        </div>
      </div>
    </div>
  );
};

export default App;
