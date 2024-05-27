import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";

function App() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Header />
      <Home />
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
