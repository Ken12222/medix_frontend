import axios from "axios";
import axiosInstance from "../axiosInstance";
import { useMutation } from "@tanstack/react-query";

async function deleteAppointment({ routeID }) {
  try {
    await axios.get("sanctum/csrf-token");
    const res = await axiosInstance.delete(
      `patient/${routeID.patientID}/appointment/${routeID.appointmentID}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

const useDeleteAppointment = () =>
  useMutation({
    mutationKey: ["deleteAppointment"],
    mutationFn: deleteAppointment,
  });

export default useDeleteAppointment;
