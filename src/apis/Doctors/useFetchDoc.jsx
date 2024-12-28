import { useQuery } from "@tanstack/react-query";

export default function fetchDoctor() {
  const getDoctor = async (url) => {
    const res = await fetch(url, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetchDoctor"],
    queryFn: () => getDoctor("/api/doctor"),
  });

  return { data, isError, isLoading };
}
