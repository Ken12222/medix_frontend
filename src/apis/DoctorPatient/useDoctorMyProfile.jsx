import axios from "axios";
import axiosInstance from "../axiosInstance";
import { useMutation } from "@tanstack/react-query";

async function addDoctorToMyProfile({ doctorID, doctor_id }) {
  try {
    await axios.get("sanctum/csrf-token");
    const res = await axiosInstance.post(`/doctor/${doctorID.id}/patient`, {
      doctor_id,
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

const useAddDoctorToMyProfile = () =>
  useMutation({
    mutationKey: ["DoctorsOnMyProfile"],
    mutationFn: addDoctorToMyProfile,
  });

export default useAddDoctorToMyProfile;
