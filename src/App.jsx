import { useState } from "react";
import "./App.css";
import PaginationTest from "./components/pagination/test";
import Clock from "./components/digatal-clock";
import CountdownTimerTest from "./components/countdown-timer/test";
import StepProgressBarTest from "./components/step-progress-bar/test";
import Stopwatch from "./components/stopwatch/stopwatch";
import Counter from "./components/counter/counter"
import ClickOutsideDropdown from "./components/dropdown-close/click"
import RandomQuoteGenerator from "./components/random-quote-generator";
import ButtonRippleEffect from "./components/button-ripple-effect";
function App() {
  return (
    <>
      <div className="App">
        {/* <PaginationTest /> */}
      {/* <Clock/> */}
        {/* <CountdownTimerTest/> */}
        {/* <StepProgressBarTest/> */}
        {/* <Stopwatch/> */}
        {/* <Counter/> */}
        {/* <ClickOutsideDropdown/> */}
        {/* <RandomQuoteGenerator/> */}
        <ButtonRippleEffect />
      </div>
    </>
  );
}

export default App;
