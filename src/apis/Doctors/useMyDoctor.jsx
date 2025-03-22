import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";
import useloggedInUser from "@/store/useLogin";
import axios from "axios";

async function FetchMyDoctor(id) {
  try {
    await axios.get("/sanctum/csrf-cookie");
    const res = await axiosInstance.get(`/doctor?query=${name}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function useMyDoctor() {
  const user = useloggedInUser((state) => state.user);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["fetchMyDoctor"],
    queryFn: () => FetchMyDoctor(user.patient.id),
  });

  return { data, isError, isLoading };
}
