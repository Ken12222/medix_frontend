import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import load from "../../../imgs/load.gif";
import { Link } from "react-router-dom";
import useloggedInUser from "@/store/useLogin";
import MyDoctorList from "./DoctorList";

export default function DoctorCard() {
  const user = useloggedInUser((state) => state.user);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="my-4">My Doctors</p>
        {user && user.length > 0 ? (
          <Link
            to={`/patient/${user.patient.id}/doctor`}
            className="text-light"
          >
            See All
          </Link>
        ) : (
          ""
        )}
      </div>

      <div className="grid grid-cols gap-6 md:grid-cols-2 lg:grid-cols-2 mb-8">
        <MyDoctorList />
      </div>
    </div>
  );
}
