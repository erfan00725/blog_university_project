import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Header />
      <Body />
      <div></div>
    </div>
  );
}

export default App;
