import useFetchAppointmentDetails from "@/apis/Appointments/useFetchAppointmentDetails";
import AppointmentButton from "@/components/cta/appointmentBtn";
import { LuCalendarDays } from "react-icons/lu";
import { LuCalendarClock } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import useDeleteAppointment from "../../apis/Appointments/DeleteAppointment";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function AppointmentDetails() {
  const { data, isError, isLoading } = useFetchAppointmentDetails();
  const appointmentDetails = data?.data;
  console.log(appointmentDetails);
  const routeID = useParams();
  const redirect = useNavigate();
  const {
    mutate: deleteAppointment,
    isError: appointmentError,
    isSuccess,
    error,
  } = useDeleteAppointment();

  function handleAppointmentDelete(e) {
    e.preventDefault();
    deleteAppointment({ routeID });
  }

  useEffect(() => {
    if (isSuccess) {
      redirect("/patient");
    }
    if (appointmentError) {
      console.log(error);
    }
  }, [isSuccess, appointmentError]);
  return (
    <section
      className="w-5/6 mx-auto my-32
    "
    >
      {Array.isArray(appointmentDetails) && appointmentDetails.length > 0 ? (
        appointmentDetails.map((appointment) => (
          <div key={appointment.appointment_id}>
            <p className="text-2xl font-bold">
              Doctor {appointment.doctor.user.name}
            </p>
            <p className=" text-l my-2">{appointment.reason}</p>
            <div className="flex">
              <div className="flex items-center mb-2">
                <LuCalendarDays />
                <p className="px-2">{appointment.appointment_date}</p>
              </div>
              <p className="mx-2">|</p>
              <div className="flex items-center mb-2">
                <LuCalendarClock />
                <p className="px-2"> {appointment.appointment_time}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400 my-2">
          There's no details for this appointment
        </p>
      )}
      <div>
        {appointmentDetails ? (
          <p className="text-gray-400 my-2">Book another apoointment</p>
        ) : (
          ""
        )}

        <div className="flex gap-2">
          <AppointmentButton />
          {appointmentDetails ? (
            <Button className="bg-red-500" onClick={handleAppointmentDelete}>
              Delete
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
