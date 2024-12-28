import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function createAppointmentQuery() {
  const { id } = useParams();
  const newAppointment = useMutation({
    mutationKey: ["newAppointment"],
    mutationFn: async (newAppointment) => {
      await fetch(`/doctor/${id}/appointment`, {
        method: "POST",
        body: JSON.stringify(appointmentData),
      }).then((response) => response.json());
    },
  });

  return newAppointment;
}
