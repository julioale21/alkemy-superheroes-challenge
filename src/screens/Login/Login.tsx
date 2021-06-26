import React from "react";
import LoginForm from "../../components/LoginForm";
import useSession from "../../hooks/useSession";
import "./index.css";

const Login: React.FC = () => {
  const { error, loginUser, loading } = useSession();

  return (
    <div className="login-section mh-100 d-flex justify-content-center align-items-center">
      <LoginForm error={error} loading={loading} login={loginUser} />
    </div>
  );
};

export default Login;
