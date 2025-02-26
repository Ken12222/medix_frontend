import DoctorCard from "@/components/doctor-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import fetchDoctor from "../../apis/Doctors/useFetchDoc";
import useCreateAppointment from "@/apis/Appointments/CreateAppointmentQuery";
import useloggedInUser from "@/store/useLogin";

export default function AddAppointment() {
  const doctorID = useParams();

  const [appointmentData, setAppointmentData] = useState({
    doctor_id: "",
    patient_id: "",
    reason: "",
    appointment_date: "",
    appointment_time: "",
  });
  const {
    mutate: addNewAppointment,
    data: newAppointmentData,
    isError: appointmentError,
    isSuccess: appointmentSuccess,
  } = useCreateAppointment();
  const { data, isSuccess, isError, error } = fetchDoctor();
  const redirect = useNavigate();
  const user = useloggedInUser((state) => state.user);
  if (!doctorID || doctorID == null || doctorID == "undefined") {
    return <Navigate to="/doctorlist" />;
  }

  function formatTime(time) {
    const [hours, minutes, seconds] = time.split(":");
    return `${hours}:${minutes}:${seconds || "00"}`;
  }

  //handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    const appointmentTime = document.getElementById("time").value;
    const timeWithSeconds = formatTime(appointmentTime);
    appointmentData.appointment_time = timeWithSeconds;
    appointmentData.patient_id = user.patient.id;
    addNewAppointment({
      doctorID,
      appointmentData,
    });
  }

  useEffect(() => {
    if (appointmentSuccess) {
      redirect("/patient");
    }
    if (appointmentError) {
      console.log(error);
    }
  });

  return (
    <>
      <section className="my-24">
        <form onSubmit={handleSubmit} className="w-5/6 mx-auto p-2">
          <div className="flex flex-col my-4">
            <Label htmlFor="doctor">Doctor</Label>
            <select
              value={appointmentData.doctor_id}
              onChange={(e) =>
                setAppointmentData({
                  ...appointmentData,
                  doctor_id: e.target.value,
                })
              }
            >
              <option value="">Select a doctor</option>
              {data &&
                data?.data.map((doctorData) => (
                  <option
                    key={doctorData[0].details.doctor_id}
                    value={doctorData[0].details.doctor_id}
                  >
                    {doctorData.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col my-4">
            <Label htmlFor="reason">Reason</Label>
            <textarea
              className="mt-2 border-2"
              value={appointmentData.reason}
              onChange={(e) =>
                setAppointmentData({
                  ...appointmentData,
                  reason: e.target.value,
                })
              }
              id="reason"
              placeholder="why are you booking this appointment"
            ></textarea>
          </div>
          <div className="flex flex-col my-4">
            <Label htmlFor="date">Date</Label>
            <Input
              className="mt-2"
              value={appointmentData.appointment_date}
              onChange={(e) =>
                setAppointmentData({
                  ...appointmentData,
                  appointment_date: e.target.value,
                })
              }
              id="date"
              type="date"
              placeholder="Set Date"
            />
          </div>
          <div className="flex flex-col my-4">
            <Label htmlFor="time">Time</Label>
            <Input
              value={appointmentData.appointment_time}
              onChange={(e) =>
                setAppointmentData({
                  ...appointmentData,
                  appointment_time: e.target.value,
                })
              }
              className="mt-2"
              id="time"
              type="time"
              placeholder="Set Time"
            />
          </div>
          <Button className="w-full">Submit</Button>
        </form>
        <DoctorCard />
      </section>
    </>
  );
}
