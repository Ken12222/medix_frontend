import DoctorCard from "@/components/doctor-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export default function AddAppointment() {
  const [appointmentData, setAppointmentData] = useState({
    doctor_id: "",
    patient_id: "",
    reason: "",
    appointment_date: "",
    appointment_time: "",
  });

  const { id } = useParams();
  if (!id || id == null || id == "undefined") {
    return <Navigate to="/doctor" />;
  }
  const newAppointment = useMutation({
    mutationKey: ["newAppointment"],
    mutationFn: async (newAppointment) => {
      await fetch(`/api/doctor/${id}/appointment`, {
        method: "POST",
        body: JSON.stringify(appointmentData),
      }).then((response) => response.json());
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    newAppointment.mutate({ appointmentData });
  }

  return (
    <>
      <section className="mt-14">
        <form onSubmit={handleSubmit} className="w-5/6 mx-auto p-2">
          <div className="flex flex-col my-4">
            <Label htmlFor="doctor">Doctor</Label>
            <Input
              className="mt-2"
              value={appointmentData.doctor}
              onChange={(e) =>
                setAppointmentData({
                  ...appointmentData,
                  doctor: e.target.value,
                })
              }
              id="doctor"
              type="text"
              placeholder="Select Doctor"
            />
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
              value={appointmentData.date}
              onChange={(e) =>
                setAppointmentData({ ...appointmentData, date: e.target.value })
              }
              id="date"
              type="date"
              placeholder="Set Date"
            />
          </div>
          <div className="flex flex-col my-4">
            <Label htmlFor="time">Time</Label>
            <Input
              value={appointmentData.time}
              onChange={(e) =>
                setAppointmentData({ ...appointmentData, time: e.target.value })
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
