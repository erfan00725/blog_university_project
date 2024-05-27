import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import PostsList from "./pages/PostsList";
import AddPost from "./pages/AddPost";
import Post from "./pages/Post";

function App() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Header />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <PostsList /> */}
      {/* <AddPost /> */}
      <Post />
      <Footer />
    </div>
  );
}

export default App;
