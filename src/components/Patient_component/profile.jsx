import { Button } from "@/components/ui/button";
import useloggedInUser from "../../store/useLogin";
import doc from "../../../imgs/dr.jpeg";
import axiosInstance from "@/apis/axiosInstance";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PatientProfile() {
  const user = useloggedInUser((state) => state.user);
  console.log(user);

  return (
    <>
      <p className="pb-4">My Profile</p>
      <div className="profile border-2 rounded-lg col-span-2 grid grid-cols-2 p-8 items-center">
        <div className="flex flex-wrap items-center gap-3">
          <img src={doc} alt="profile_img" className="rounded-full w-1/5" />
          <div>
            {user && user.name && <p className="text-gray-600">{user.name}</p>}
            {user && user.patient != null ? (
              <p>{user.patient.contact}</p>
            ) : (
              <p className="text-gray-400">Finish setting up your profile</p>
            )}
            {user && user.patient != null && (
              <p className="text-gray-600">{user.patient.insurance_card}</p>
            )}
          </div>
        </div>
        {user && user.patient == null ? (
          <Link
            className="bg-red-500 py-2 px-2 rounded-lg text-white text-center"
            to="/complete_profile"
          >
            Setup Profile
          </Link>
        ) : (
          <Button onClick={() => updateUserData()}>Update</Button>
        )}
      </div>
    </>
  );
}
