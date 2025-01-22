import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuMail, LuUserRound, LuLightbulb } from "react-icons/lu";
import doc from "../../../imgs/dr.jpeg";
import { useEffect, useState } from "react";
import load from "../../../imgs/load.gif";
import { Link } from "react-router-dom";
import useFetchMyDoctor from "@/apis/Doctors/useMyDoctor";

export default function DoctorCard() {
  const { data, isLoading, isError } = useFetchMyDoctor();
  const MyDoctorData = data?.data;

  return (
    <div>
      <p className="my-4">My Doctors</p>

      <div className="grid grid-cols gap-6 md:grid-cols-2 lg:grid-cols-2 mb-8">
        {Array.isArray(MyDoctorData) && MyDoctorData.length > 0 ? (
          MyDoctorData.map((doctorData) => (
            <Link
              key={doctorData.doctor.id}
              to={`/doctor/${doctorData.doctor.id}`}
            >
              <Card className="bg-gray-100 hover:bg-gray-50">
                <div>
                  <img
                    className="h-48 w-full object-top object-cover"
                    src={doc}
                    alt="doctor_img"
                  />
                </div>

                <CardContent className="p-4 py-2 flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <LuUserRound size="20" className="text-gray-400" />
                    <h2 className="font-bold my-auto">
                      {doctorData.doctor.user.name}
                    </h2>
                  </div>

                  <div className="flex gap-2 items-center">
                    <LuMail size="20" className="text-gray-400" />
                    <p className="text-gray-400 my-auto text-sm">
                      {doctorData.doctor.user.email}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <LuLightbulb size="20" className="text-gray-400" />
                    <p className="text-gray-400 my-auto text-sm">
                      {doctorData.doctor.specialty}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div>
            <p className="text-gray-400 mb-2">
              There are no doctors on your profile
            </p>
            <Button>Add Doctor</Button>
          </div>
        )}
      </div>
    </div>
  );
}
