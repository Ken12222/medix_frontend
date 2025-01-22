import axiosInstance from "../axiosInstance";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

async function updatePatient({ patientID, updateData }) {
  try {
    await axios.get("/sanctum/csrf-cookie");
    const res = await axios.put(
      `/api/patient/${patientID.patientID}`,
      updateData,
      {
        withCredentials: true,
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    throw new Error(error.responnse.data.message || "failed to update");
  }
}

const useUpdatePatientProfile = () =>
  useMutation({
    mutationKey: ["updatePatientProfile"],
    mutationFn: updatePatient,
  });

export default useUpdatePatientProfile;
