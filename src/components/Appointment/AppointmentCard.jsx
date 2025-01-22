import doc from "../../../imgs/dr.jpeg";
import { Link } from "react-router-dom";
import { LuCalendarDays } from "react-icons/lu";
import useFetchAppointment from "@/apis/Appointments/useFetchAppointment";
import useloggedInUser from "@/store/useLogin";
import AppointmentButton from "../cta/appointmentBtn";

export default function AppointmentList() {
  const { data, isError, isLoading } = useFetchAppointment();
  const user = useloggedInUser((state) => state.user);
  const appointmentData = data?.data;

  return (
    <div className="myappointments pb-4">
      <p className="pb-2">My Appointments</p>
      {Array.isArray(appointmentData) && appointmentData.length > 0 ? (
        appointmentData.map((appointment) => (
          <div
            key={appointment.appointment_id}
            className="w-full bg-white shadow-lg rounded-lg flex flex-wrap p-4"
          >
            <p className="text-sm text-gray-400 mb-2">Appointment with</p>
            <div className="flex items-center gap-2">
              <img src={doc} alt="doctor_img" className="rounded-full w-1/6" />
              <div>
                <p className="font-bold">Doctor Name</p>
                <p className="text-sm text-gray-400">Doctor_specialty</p>
              </div>
            </div>
            <div className="bg-gray-100 my-4 w-full p-2 flex items-center gap-4">
              <div className="bg-blue-200 p-2 rounded-full">
                <LuCalendarDays />
              </div>
              <div>
                <p>
                  {appointment.appointment_date} |{" "}
                  {appointment.appointment_time}
                </p>
              </div>
            </div>

            {user && (
              <Link
                to={`/patient/${user.patient.id}/appointment/${appointment.appointment_id}`}
                className="text-light"
              >
                View
              </Link>
            )}
          </div>
        ))
      ) : (
        <div>
          <p className="text-gray-400 mb-2">
            There are no appointments on your profile
          </p>
          <AppointmentButton />
        </div>
      )}
    </div>
  );
}
