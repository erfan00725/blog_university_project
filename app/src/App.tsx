import { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import PostsList from "./pages/PostsList";
import AddPost from "./pages/AddPost";
import Post from "./pages/Post";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts">
          <Route index element={<PostsList />} />
          <Route path=":post" element={<Post />} />
          <Route path="add" element={<AddPost />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

{
  /* <Home /> */
}
{
  /* <About /> */
}
{
  /* <PostsList /> */
}
{
  /* <AddPost /> */
}
// <Post />

export default App;
