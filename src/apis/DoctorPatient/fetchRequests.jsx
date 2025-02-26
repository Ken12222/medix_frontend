import useloggedInUser from "@/store/useLogin";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";
import axios from "axios";

async function fetchRequest(doctorID) {
  try {
    await axios.get("/sanctum/csrf-cookie");
    const res = await axiosInstance.get(`doctor/${doctorID}/patient`);
    const data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function useFetchRequest() {
  const user = useloggedInUser((state) => state.user);
  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ["fetchRequest"],
    queryFn: () => fetchRequest(user.doctor.id),
  });

  return { data, isSuccess, isError, error };
}
