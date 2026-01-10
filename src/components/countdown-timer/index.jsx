import React, { useEffect, useState, useRef } from "react";
import './timer.css'
function CountdowTimer({ initalTime, onTimeFinish }) {
  const [time, setTime] = useState(initalTime);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRefrence = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalRefrence.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalRefrence.current);
            setIsRunning(false);

            if (onTimeFinish) {
              onTimeFinish();
            }
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRefrence.current);
    }
    return () => {
      clearInterval(intervalRefrence.current);
    };
  }, [isRunning, onTimeFinish]);

  function handlePauseAndResume() {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  }
  function handleReset() {
    clearInterval(intervalRefrence.current);
    setTime(initalTime);
    setIsRunning(false)
  }
  function handleStart() {
    setIsRunning(true);
  }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="timer">
      <p>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </p>
      <div className="timer-button">
        <button onClick={handlePauseAndResume}>
          {isRunning ? "Pause" : "Resume"}
        </button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  );
}

export default CountdowTimer;
