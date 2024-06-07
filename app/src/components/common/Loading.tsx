import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LoadingProps } from "../../types/propsTypes";

const Loading = ({ isLoading = true }: LoadingProps) => {
  return isLoading ? (
    <div className="flex justify-center items-center">
      <FontAwesomeIcon spinPulse icon={faSpinner} className="text-2xl" />
    </div>
  ) : null;
};

export default Loading;
