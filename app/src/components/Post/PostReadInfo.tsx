import { PostReadInfoProps } from "../../types/propsTypes";

const PostReadInfo = ({ created_at }: PostReadInfoProps) => {
  const date = new Date(created_at || "Mar 23, 2023");
  const formatedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);

  return (
    <div className="flex flex-row w-full justify-start post-detail py-1">
      <span>{formatedDate}</span>
      <span className="px-2">.</span>
      <span>2 min</span>
    </div>
  );
};

export default PostReadInfo;
