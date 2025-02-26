import axios from "axios";
import axiosInstance from "../axiosInstance";
import { useMutation } from "@tanstack/react-query";
import useloggedInUser from "@/store/useLogin";

async function approveRequest({ ids, status }) {
  try {
    await axios.get("sanctum/csrf-cookie");
    const res = await axiosInstance.put(
      `doctor/${ids.doctorID}/patient/${ids.patientID}`,
      { status }
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

const useApproveRequest = () =>
  useMutation({
    mutationKey: ["approveRequest"],
    mutationFn: approveRequest,
  });

export default useApproveRequest;
