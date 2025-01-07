import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
//import getDoctorDetails from "./GetDoctorDetails";

export default function FetchDocDetails() {
  const { id } = useParams();

  // const getDoctorDetails = async (url) => {
  //   const res = await fetch(url, {
  //     method: "GET",
  //   });
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch data");
  //   }
  //   const data = await res.json();
  //   return data;
  // };

  async function getDoctorDetails() {
    const res = await axios.get(`/api/doctor/${id}`);
    const data = res.data;
    return data;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetchDoctorDetails", id],
    queryFn: () => getDoctorDetails(),
  });

  return { data, isLoading, isError };
}
