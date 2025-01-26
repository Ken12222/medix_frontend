import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";
import { useParams } from "react-router-dom";
import axios from "axios";

async function fetchAppointmetDetails(patientID, appointmentID) {
  try {
    await axios.get("sanctum/csrf-token");
    const res = await axiosInstance.get(
      `/patient/${patientID}/appointment/${appointmentID}`
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function useFetchAppointmentDetails() {
  const dataIDs = useParams();
  //console.log(dataIDs.appointmentID);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["fetchAppointmentDetails"],
    queryFn: () =>
      fetchAppointmetDetails(dataIDs.patientID, dataIDs.appointmentID),
  });

  return { data, isError, isLoading };
}
