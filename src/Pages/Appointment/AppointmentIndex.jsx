import AppointmentList from "@/components/Appointment/AppointmentList";
import useloggedInUser from "@/store/useLogin";
import useFetchAppointment from "@/apis/Appointments/useFetchAppointment";

export default function AppointmentIndex() {
  const { data, isError, isLoading } = useFetchAppointment();
  const user = useloggedInUser((state) => state.user);
  const appointmentData = data?.data;
  return (
    <main className="w-5/6 mx-auto my-24">
      <p>My Appointments</p>
      <AppointmentList appointmentData={appointmentData} user={user} />
    </main>
  );
}
