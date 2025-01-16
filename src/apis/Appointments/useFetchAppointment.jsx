import axiosInstance from "../axiosInstance";
import useloggedInUser from "@/store/useLogin";
import { useQuery } from "@tanstack/react-query";

async function fetchApointment(id) {
  try {
    const response = await axiosInstance.get(`patient/${id}/appointment`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default function useFetchAppointment() {
  const user = useloggedInUser((state) => state.user);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["fetchAppointment"],
    queryFn: () => fetchApointment(user.patient.id),
  });
  return { data, isError, isLoading };
}
