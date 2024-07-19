import { useContext, useEffect } from "react";
import LoginForm from "../components/Auth/LoginForm";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useContext(AuthContext)[0];
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth);
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
