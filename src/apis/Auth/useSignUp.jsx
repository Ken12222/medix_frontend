import axiosInstance from "../axiosInstance";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

async function signUp(signUpData) {
  try {
    await axios.get("/sanctum/csrf-cookie");
    const res = await axios.post("api/register", signUpData, {
      withCredentials: true,
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

const useSignUp = (signUpData) =>
  useMutation({
    mutationKey: ["signUp"],
    mutationFn: signUp,
  });

export default useSignUp;

// export default function useSignUp() {
//   useMutation({

//   });
// }
