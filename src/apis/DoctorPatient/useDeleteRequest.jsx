import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";

async function deleteRequest() {
  try {
    await axios.get("/sanctum/csrf-cookie");
    const res = await axiosInstance.delete(
      `doctor/${ids.doctorID}/patient/${ids.patientID}`
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

const useDeleteRequest = () =>
  useMutation({
    mutationKey: ["deleteRequest"],
    mutationFn: deleteRequest,
  });

export default useDeleteRequest;
