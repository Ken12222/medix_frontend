import axios from "axios";
import axiosInstance from "../axiosInstance";
import { useMutation } from "@tanstack/react-query";

async function verifyPatient() {
  try {
    await axios.get("/sanctum/csrf-cookie");
    const res = await axiosInstance.post("/patient");
    const data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

const useVerifyPatient = () =>
  useMutation({
    mutationKey: ["verifyPatient"],
    mutationFn: verifyPatient,
  });

export default useVerifyPatient;
