import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useLogin = () => {
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

  return {
    error,
    loginUser,
  };
};

export default useLogin;
