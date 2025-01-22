import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";

async function createAppointment({ doctorID, appointmentData }) {
  try {
    await axios.get("sanctum/csrf-cookie");
    const res = await axiosInstance.post(
      `doctor/${doctorID.doctorID}/appointment`,
      appointmentData
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
    // throw new Error(
    //   error.response.data.message || "failed to create appointment"
    // );
  }
}

const useCreateAppointment = () =>
  useMutation({
    mutationKey: ["createAppointment"],
    mutationFn: createAppointment,
  });

export default useCreateAppointment;
