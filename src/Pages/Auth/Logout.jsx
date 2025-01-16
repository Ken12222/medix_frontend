import { useMutation } from "@tanstack/react-query";
import useloggedInUser from "@/store/useLogin";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/apis/axiosInstance";
import axios from "axios";

async function LogUserOut() {
  try {
    await axios.get("/sanctum/csrf-cookie");
    const response = await axiosInstance.post("/logout");
    const data = response?.data;
    return data;
  } catch (error) {
    console.error(error.response?.data?.message || error.message);
    throw error;
  }
}

export default function useLogOut() {
  const setLogOut = useloggedInUser((state) => state.logout);
  const redirect = useNavigate();

  return useMutation({
    mutationFn: LogUserOut,
    onSuccess: () => {
      setLogOut(null, null);
      redirect("/");
    },
    onError: (error) => {
      console.error("Logout failed:", error.response?.data || error.message);
    },
  });
}
