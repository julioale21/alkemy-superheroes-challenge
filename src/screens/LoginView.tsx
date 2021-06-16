import React, { useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import axios from "axios";
import backgroundImg from "../assets/super-background.jpg";
import { useHistory } from "react-router-dom";

const LoginView: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const loginUser = async (email: string, password: string): Promise<void> => {
    try {
      const { data } = await axios.post("http://challenge-react.alkemy.org/", {
        email,
        password,
      });

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      history.push("/home");
    } catch (error) {
      if (error.message.includes("401")) {
        setError("Unauthorized: Invalid Email or Password.");
      }
    }
  };

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
