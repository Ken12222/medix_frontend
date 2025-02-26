import axios from "axios";
import axiosInstance from "../axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useloggedInUser from "@/store/useLogin";

async function fetchReports({ patientID, doctorID }) {
  try {
    await axios.get("sanctum/csrf-cookie");
    const res = await axiosInstance.get(
      `doctor/${doctorID.id}/patient/${patientID}/report`
    );
    const data = res.data;
    return data;
  } catch (error) {}
  console.error(error.response.data.message);
}

export default function useFetchReport() {
  const doctorID = useParams();
  const user = useloggedInUser((state) => state.user);
  const patientID = user.patient.id;
  const { data, isError, isLoading, isSuccess, error } = useQuery({
    queryKey: ["fetchReports"],
    queryFn: () => fetchReports({ doctorID, patientID }),
  });

  return { data, isLoading, isSuccess };
}
