import {
  faFacebook,
  faInstagram,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Api from "../../utilities/apis";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/authContext";

const Header = () => {
  const api = new Api();
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      api.loginCheck(token).then(() => {
        setAuth(true);
      });
    }
  }, []);

  const logOutHandeler = () => {
    api
      .logout()
      .then((res) => {
        localStorage.removeItem("token");
        console.log(res);
        toast.success("logout successfully!");
        setAuth(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full text-main-color mb-16">
      <div className="flex flex-col justify-center items-center mt-12 mb-12 pl-5 pr-5">
        <span className="text-2xl mb-3 text-center w-full tracking-[0.2em] font-extralight">
          EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
        </span>
        <Link to={"/"}>
          <h1 className="font-bold text-8xl w-full">Train of Thought</h1>
        </Link>
      </div>

      <ul className="flex flex-row justify-center items-center border-t border-b border-main-color w-full h-[50px]">
        <li className="menu_items">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "text-main-color"
                : isActive
                  ? "text-secondery-color"
                  : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li className="menu_items">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "text-main-color"
                : isActive
                  ? "text-secondery-color"
                  : ""
            }
            to={"/about"}
          >
            About
          </NavLink>
        </li>
        <li className="menu_items">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "text-main-color"
                : isActive
                  ? "text-secondery-color"
                  : ""
            }
            to={"/posts"}
          >
            My Blog
          </NavLink>
        </li>
        <li className="menu_items border-l-0 cursor-pointer">
          <a href="#contactForm" className="w-full h-full">
            Contact
          </a>
        </li>
        {auth && (
          <>
            <li className="menu_items">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-main-color"
                    : isActive
                      ? "text-secondery-color"
                      : ""
                }
                to={"/posts/add"}
              >
                Create Post
              </NavLink>
            </li>
            <li
              onClick={logOutHandeler}
              className="menu_items border-l-0 cursor-pointer"
            >
              <span className="w-full h-full">Logout</span>
            </li>
          </>
        )}
        <li className="menu_items pl-2 pr-2 relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-full h-8 border-b focus-visible:border-main-color hover:border-main-color px-1"
          />
          <FontAwesomeIcon
            className="absolute right-4"
            icon={faMagnifyingGlass}
          />
        </li>
        <li className="menu_items">
          <a className="social_icons btnIcon" href="">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a className="social_icons btnIcon" href="">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a className="social_icons btnIcon" href="">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="social_icons btnIcon" href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
