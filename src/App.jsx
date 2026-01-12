import { useState } from "react";
import "./App.css";
import PaginationTest from "./components/pagination/test";
import Clock from "./components/digatal-clock";
import CountdownTimerTest from "./components/countdown-timer/test";
import StepProgressBarTest from "./components/step-progress-bar/test";
function App() {
  return (
    <>
      <div className="App">
        {/* <PaginationTest /> */}
      {/* <Clock/> */}
        {/* <CountdownTimerTest/> */}
        <StepProgressBarTest/>
      </div>
    </>
  );
}

export default App;
