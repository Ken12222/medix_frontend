import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";

async function getDoctor() {
  try {
    const response = await axiosInstance.get("doctor");
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function fetchDoctor() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetchDoctor"],
    queryFn: () => getDoctor(),
  });

  return { data, isError, isLoading };
}
