import doc from "../../../imgs/dr.jpeg";
import { Link } from "react-router-dom";

import useFetchAppointment from "@/apis/Appointments/useFetchAppointment";
import useloggedInUser from "@/store/useLogin";
import AppointmentButton from "../cta/appointmentBtn";
import FetchDocDetails from "@/apis/Doctors/useFetchDoctorDetails";
import AppointmentList from "./AppointmentList";

export default function Appointment() {
  const { data, isError, isLoading } = useFetchAppointment();
  const user = useloggedInUser((state) => state.user);
  const appointmentData = data?.data;
  console.log(appointmentData);
  return (
    <div className="myappointments pb-4">
      {appointmentData && appointmentData.length > 0 ? (
        <div className="flex justify-between">
          <p className="pb-2 text-gray-400">Upcoming Appointments</p>
          <Link
            to={`/patient/${user.patient.id}/appointment`}
            className="text-light"
          >
            See All
          </Link>
        </div>
      ) : (
        <p className="text-gray-400">There are no appointments at the moment</p>
      )}
      <AppointmentList appointmentData={appointmentData} user={user} />
    </div>
  );
}
