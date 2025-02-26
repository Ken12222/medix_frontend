import useFetchAppointment from "@/apis/Appointments/useFetchAppointment";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function DocAppointmentCard() {
  const { data, isError, isLoading, isSuccess } = useFetchAppointment();
  const appointmentData = data?.data;

  return (
    <section className="bg-deep rounded-lg py-4 ">
      <div className="flex justify-between text-white px-4 pb-2">
        <p>Upcoming Appointments</p>
        <Link to={``}>See All</Link>
      </div>
      {Array.isArray(appointmentData) && appointmentData.length > 0 ? (
        appointmentData.map((appointment) => (
          <div key={appointment.appointment_id}>
            <div className="flex justify-between px-4 pb-2 text-white">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <LuCalendarDays />
                <h5 className="mt-2">{appointment.appointment_date}</h5>
                <p className="text-sm text-gray-300">Appointment Date</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <LuCalendarDays />
                <h5 className="mt-2">{appointment.appointment_time}</h5>
                <p className="text-sm text-gray-300">Appointment Time</p>
              </div>
            </div>
            <div className="flex gap-2 my-2 mx-4 bg-white h-fit p-2 rounded-lg">
              <img
                className="w-10 h-10 items-center rounded-full bg-gray-400"
                src=""
                alt=""
              />
              <div>
                <p>{appointment.patient.Patient_Details.name}</p>
                <p className="text-sm text-gray-400">
                  {appointment.patient.contact}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">You have no appointments at the moment</p>
      )}
    </section>
  );
}
