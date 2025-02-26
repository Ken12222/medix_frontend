import axios from "axios";
import axiosInstance from "../axiosInstance";
import { useMutation } from "@tanstack/react-query";

async function updateAppointment({ ids, appointmentData }) {
  try {
    await axios.get("/sanctum/csrf-cookie");
    const res = await axiosInstance.put(
      `doctor/${ids.doctorID}/appointment/${ids.appointmentID}`,
      appointmentData
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

const useUpdateAppointment = () =>
  useMutation({
    mutationKey: ["updateAppointment"],
    mutationFn: updateAppointment,
  });

export default useUpdateAppointment;
