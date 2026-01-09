import { useState } from "react";
import "./App.css";
import PaginationTest from "./components/pagination/test";
import Clock from "./components/digatal-clock";
function App() {
  return (
    <>
      <div className="App">
        {/* <PaginationTest /> */}
        <Clock/>
      </div>
    </>
  );
}

export default App;
