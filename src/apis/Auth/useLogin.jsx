import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";
import axios from "axios";

// const loginUser = async (loginData) => {
//   const res = await fetch("/api/login", {
//     method: "POST",
//     body: JSON.stringify(loginData),
//   });
//   if (!res.ok) {
//     throw new Error("failed to get the user");
//   }
//   const data = await res.json();
//   return data;
// };

async function loginUser(loginData) {
  try {
    await axios.get("/sanctum/csrf-cookie");
    await axiosInstance.post("login", loginData);
    const data = await axiosInstance.get("/user");
    return data;
  } catch (error) {
    console.error("login failed", error.response?.error || error.message);
    throw error;
  }
}

const useLogin = () =>
  useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
  });

export default useLogin;
