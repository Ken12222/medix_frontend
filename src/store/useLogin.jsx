import { create } from "zustand";
import useLogin from "@/apis/Auth/useLogin";
import { persist } from "zustand/middleware";

const useloggedInUser = create(
  persist(
    (set) => ({
      user: null,
      isUserAuthenticated: false,
      setUser: (user) => set({ user, isUserAuthenticated: true }),
      logout: (user) => {
        set({ user, isUserAuthenticated: false });
      },
    }),
    { name: "logged_in" }
  )
);

export default useloggedInUser;
