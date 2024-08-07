import PostPrevList from "../Post/PostPrevList";
import { Link } from "react-router-dom";

const MainLeft = () => {
  return (
    <div className="flex-2 flex flex-col justify-start items-center border-main-color border-r pb-20">
      <div className="flex flex-col justify-start items-start">
        <h3 className="section-title">TRAIN OF THOUGHT</h3>
        <PostPrevList perPage={7} />
      </div>
      <Link to={"/posts"} className="btn w-40 mt-12 leading-9 text-center">
        More Posts
      </Link>
    </div>
  );
};

export default MainLeft;
