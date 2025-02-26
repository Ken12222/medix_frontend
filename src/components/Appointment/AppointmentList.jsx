import { Link } from "react-router-dom";
import { LuCalendarDays } from "react-icons/lu";
import AppointmentButton from "../cta/appointmentBtn";

export default function AppointmentList({ appointmentData, user }) {
  console.log(appointmentData);
  return (
    <main>
      {Array.isArray(appointmentData) ? (
        appointmentData.map((appointment) => (
          <div key={appointment.appointment_id} className="shadow-lg p-4">
            <p className="text-gray-400">Reason</p>
            <h4>{appointment.reason}</h4>
            <div className="bg-gray-200 p-2 my-2 flex items-center">
              <div className="bg-gray-300 w-fit p-2 rounded-full">
                <LuCalendarDays />
              </div>
              <div className="flex">
                {appointment.appointment_date}
                <p>||</p>
                {appointment.appointment_time}
              </div>
            </div>
            <Link
              to={`/patient/${user.patient.id}/appointment/${appointment.appointment_id}`}
              className="text-light"
            >
              View
            </Link>
          </div>
        ))
      ) : (
        <div>
          <p className="text-gray-400 my-2">
            There are no appointments at the moment
          </p>
        </div>
      )}
      <div className="my-4">
        <AppointmentButton />
      </div>
    </main>
  );
}
