import { Button } from "@/components/ui/button";
import useloggedInUser from "../../store/useLogin";
import doc from "../../../imgs/dr.jpeg";

export default function PatientProfile() {
  const user = useloggedInUser((state) => state.user);
  return (
    <>
      <p className="pb-4">My Profile</p>
      <div className="profile border-2 rounded-lg col-span-2 grid grid-cols-2 p-8 items-center">
        <div className="flex flex-wrap items-center gap-3">
          <img src={doc} alt="profile_img" className="rounded-full w-1/5" />
          <div>
            {user && <h1 className="font-bold">Welcome, {user.name}</h1>}
            {user && <p className="text-gray-600">{user.role}</p>}
          </div>
        </div>
        <Button>Update</Button>
      </div>
    </>
  );
}
