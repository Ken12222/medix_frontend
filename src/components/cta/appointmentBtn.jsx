import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import useloggedInUser from "@/store/useLogin";
import { useEffect } from "react";

export default function AppointmentButton() {
  const isUserAuthenticated = useloggedInUser(
    (state) => state.isUserAuthenticated
  );
  const { id } = useParams();
  const redirect = useNavigate();

  function handleCreateAppointmentRoute() {
    if (isUserAuthenticated && !id) {
      redirect("/doctor");
    } else if (!isUserAuthenticated && id) {
      redirect("/login");
    } else {
      redirect(`/doctor/${id}/appointment`);
    }
  }

  return (
    <>
      <Button onClick={handleCreateAppointmentRoute}>Book Appointment</Button>
    </>
  );
}
