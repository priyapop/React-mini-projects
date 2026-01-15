import React, { useState } from "react";

function Counter() {
  const [history, setHistory] = useState([0]);
  const [position, setPosition] = useState(0);

  const currentValue = history[position];

  const addValueToHistory = (newValue) => {
    const newHistory = history.slice(0, position + 1);
    setHistory([...newHistory, newValue]);
    setPosition(position + 1);
  };

  const decrement = () => addValueToHistory(currentValue - 1);
  const increment = () => addValueToHistory(currentValue + 1);

  const undo = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };
  const redo = () => {
    if(position < history.length - 1)
    {
        setPosition(position + 1)
    }
  };
  console.log(history, position);

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <div>{currentValue}</div>
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={undo}>undo</button>
        <div>
          {position + 1} / {history.length}
        </div>
        <button onClick={redo}>redo</button>
      </div>
    </div>
  );
}

export default Counter;
