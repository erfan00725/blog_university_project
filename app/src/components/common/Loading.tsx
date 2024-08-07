import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingProps } from "../../types/propsTypes";

const Loading = ({ isLoading = true }: LoadingProps) => {
  return isLoading ? (
    <div className="flex justify-center items-center my-2">
      <FontAwesomeIcon spinPulse icon={faSpinner} className="text-2xl" />
    </div>
  ) : null;
};

export default Loading;
