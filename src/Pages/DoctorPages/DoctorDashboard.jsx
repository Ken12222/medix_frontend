import DocAppointmentCard from "@/components/DoctorComponents/Appointment/DocAppointmentCard";
import NewRequest from "./PatientRequests/NewRequest";
import { Button } from "@/components/ui/button";
import useloggedInUser from "@/store/useLogin";

export default function DoctorDashboard() {
  const user = useloggedInUser((state) => state.user);

  return (
    <main className="w-5/6 mx-auto my-24">
      <div className="flex items-center justify-between">
        <p className="my-4">Welcome, {user.name}</p>
        {user.KYC === null ? (
          <a className="text-red-500" href="">
            Verify Account
          </a>
        ) : (
          ""
        )}
      </div>
      <DocAppointmentCard />
      <NewRequest />
      <div className="flex justify-center gap-4 my-4">
        <p className="border-2 border-gray-300 text-gray-400 text-sm rounded-full p-4">
          Report
        </p>
        <p className="border-2 border-gray-300 text-gray-400 text-sm rounded-full p-4">
          Patient
        </p>
      </div>
    </main>
  );
}
