import axiosInstance from "../axiosInstance";
import useloggedInUser from "@/store/useLogin";
import { useQuery } from "@tanstack/react-query";

async function fetchApointment(id, AuthUserRole) {
  if (AuthUserRole === "patient") {
    try {
      const response = await axiosInstance.get(`patient/${id}/appointment`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  } else if (AuthUserRole === "doctor") {
    try {
      const response = await axiosInstance.get(`doctor/${id}/appointment`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default function useFetchAppointment() {
  const user = useloggedInUser((state) => state.user);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["fetchAppointment"],
    queryFn: () =>
      fetchApointment(
        user.role === "patient" ? user.patient.id : user.doctor.id,
        user.role
      ),
  });
  return { data, isError, isLoading };
}
