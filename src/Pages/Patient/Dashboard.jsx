import AppointmentCard from "@/components/Appointment/AppointmentCard";
import PatientProfile from "@/components/Patient_component.jsx/profile";

export default function PatientDasboard() {
  return (
    <main className="my-20 w-5/6 mx-auto grid md:gap-4 grid-cols-1 md:grid-cols-3">
      <AppointmentCard />
      <div className="col-span-2">
        <PatientProfile />
        <p className="py-4">My Doctors</p>
      </div>
    </main>
  );
}
