import React from "react";
import LoginForm from "../../components/LoginForm";
import backgroundImg from "../../assets/super-background.jpg";
import useSession from "../../hooks/useSession";

const LoginView: React.FC = () => {
  const { error, loginUser } = useSession();

  return (
    <div
      className="mh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "contain",
        height: "100vh",
      }}
    >
      <LoginForm error={error} login={loginUser} />
    </div>
  );
};

export default LoginView;
