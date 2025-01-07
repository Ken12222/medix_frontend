import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getDoctor() {
  try {
    const response = await axios.get("/api/doctor");
    return response.data;
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
