import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";
import { useParams } from "react-router-dom";
import axios from "axios";

async function fetchAppointmetDetails(patientID, appointmentID) {
  try {
    const res = await axios.get(
      `/api/patient/${patientID}/appointment/${appointmentID}`,
      {
        headers: {
          //method: "GET",
          Accept: "application/json",
          withCredentials: true,
        },
      }
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
