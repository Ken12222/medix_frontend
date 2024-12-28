import { useMutation } from "@tanstack/react-query";

const loginUser = async (loginData) => {
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(loginData),
  });
  if (!res.ok) {
    throw new Error("failed to get the user");
  }
  const data = await res.json();

  return data;
};

const useLogin = () =>
  useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
  });

export default useLogin;
