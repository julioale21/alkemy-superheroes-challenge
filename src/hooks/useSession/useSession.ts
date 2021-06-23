import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { HeroService } from "../../services/HeroServise";

const useSession = () => {
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

  const handleLogOut = () => {
    HeroService.removeItem("token");
    window.location.reload(true);
  };

  const getToken = () => {
    return HeroService.getItem("token");
  };

  return {
    error,
    loginUser,
    handleLogOut,
    getToken,
  };
};

export default useSession;
