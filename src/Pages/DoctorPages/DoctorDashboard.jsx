import DocAppointmentCard from "@/components/DoctorComponents/Appointment/DocAppointmentCard";
import NewRequest from "./PatientRequests/NewRequest";
import { Button } from "@/components/ui/button";
import useloggedInUser from "@/store/useLogin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorDashboard() {
  const user = useloggedInUser((state) => state.user);
  const isUserAuthenticated = useloggedInUser(
    (state) => state.isUserAuthenticated
  );
  const redirect = useNavigate();

  useEffect(() => {
    if (!isUserAuthenticated && !user) {
      redirect("/login");
    }
    if (isUserAuthenticated && user.role === "patient") {
      redirect("/");
    }
  }, [isUserAuthenticated, user]);

  return (
    <main className="w-5/6 mx-auto my-24">
      <div className="flex items-center justify-between">
        {user && <p className="my-4">Welcome, {user.name}</p>}
        {user && user.KYC === null ? (
          <a className="text-red-500" href="">
            Verify Account
          </a>
        ) : (
          ""
        )}
      </div>
      <DocAppointmentCard />
      <NewRequest />
      <div className="flex justify-center gap-4 my-4"></div>
    </main>
  );
}
