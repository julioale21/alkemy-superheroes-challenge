import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { HeroService } from "../../services/HeroServise";

const useSession = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const loginUser = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      const { data } = await axios.post("http://challenge-react.alkemy.org/", {
        email,
        password,
      });

      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      setLoading(false);
      history.push("/home");
    } catch (error) {
      if (error.message.includes("401")) {
        setError("Unauthorized: Invalid Email or Password.");
        setLoading(false);
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
    loading,
    loginUser,
    handleLogOut,
    getToken,
  };
};

export default useSession;
