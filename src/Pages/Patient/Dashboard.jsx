import AppointmentCard from "@/components/Appointment/AppointmentCard";
import PatientProfile from "@/components/Patient_component/profile";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import useloggedInUser from "@/store/useLogin";
import MyDoctor from "../../components/Patient_component/MyDoctor";
import { useEffect } from "react";

export default function PatientDasboard() {
  const redirect = useNavigate();
  const user = useloggedInUser((state) => state.user);
  const isUserAuthenticated = useloggedInUser(
    (state) => state.isUserAuthenticated
  );
  useEffect(() => {
    if (!isUserAuthenticated && !user) {
      redirect("/");
    }
  }, [isUserAuthenticated, user]);

  return (
    <main className="my-20 w-5/6 mx-auto grid md:gap-4 grid-cols-1 md:grid-cols-3">
      <div className="my-4">
        {user && (
          <h1 className="font-bold text-xl mb-4">Welcome, {user.name}</h1>
        )}
        <AppointmentCard />
      </div>
      <div className="col-span-2">
        <PatientProfile />
        <MyDoctor />
      </div>
    </main>
  );
}
