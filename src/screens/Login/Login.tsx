import React from "react";
import LoginForm from "../../components/LoginForm";
import backgroundImg from "../../assets/super-background.jpg";
import useSession from "../../hooks/useSession";

const Login: React.FC = () => {
  const { error, loginUser, loading } = useSession();

  return (
    <div
      className="mh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "contain",
        height: "100vh",
      }}
    >
      <LoginForm error={error} loading={loading} login={loginUser} />
    </div>
  );
};

export default Login;