import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useUpdateAppointment from "@/apis/Appointments/useUpdateAppointment";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import fetchDoctor from "@/apis/Doctors/useFetchDoc";
import useloggedInUser from "@/store/useLogin";

export default function UpdateAppointment() {
  function formatTime(time) {
    const [HH, mm, ss] = time.split(":");
    return `${HH}:${mm}:${ss || "00"}`;
  }

  const {
    mutate: updateAppointment,
    data: appointmentUpdateData,
    isSuccess,
    isError,
    error,
  } = useUpdateAppointment();
  const user = useloggedInUser((state) => state.user);
  const { data, isLoading, isError: DoctorFetchError } = fetchDoctor();

  const ids = useParams();

  const [appointmentData, setAppointmentData] = useState({
    appointment_time: "",
    appointment_date: "",
    doctor_id: "",
    reason: "",
  });

  const redirect = useNavigate();

  //handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    const appointmentTime = document.getElementById("time").value;
    const timeWithSeconds = formatTime(appointmentTime);
    appointmentData.appointment_time = timeWithSeconds;
    appointmentData.patient_id = user.patient.id;

    updateAppointment({ ids, appointmentData });
  }

  useEffect(() => {
    if (isSuccess) {
      redirect(`/patient/${user.patient.id}/appointment`);
    }
  }, [isSuccess, isError, redirect]);

  return (
    <main className="my-24">
      <form onSubmit={handleSubmit} className="w-5/6 mx-auto py-2">
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
                  key={doctorData.details.doctor_id}
                  value={doctorData.details.doctor_id}
                >
                  {doctorData.user.name}
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
    </main>
  );
}
