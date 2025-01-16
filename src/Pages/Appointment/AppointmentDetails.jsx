import useFetchAppointmentDetails from "@/apis/Appointments/useFetchAppointmentDetails";

export default function AppointmentDetails() {
  const { data, isError, isLoading } = useFetchAppointmentDetails();
  console.log(data);
  return <section className="w-5/6 mx-auto my-24">Hello</section>;
}
