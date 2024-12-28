import { create } from "zustand";
import useLogin from "@/apis/Auth/useLogin";
import { persist } from "zustand/middleware";

const useloggedInUser = create((set) => ({
  userToken: null,
  setUserToken: (token) => set({ userToken: token }),
}));

export default useloggedInUser;
