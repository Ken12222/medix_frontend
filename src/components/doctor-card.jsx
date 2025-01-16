import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuMail, LuUserRound, LuLightbulb } from "react-icons/lu";
import doc from "../../imgs/dr.jpeg";
import { useState } from "react";
import load from "../../imgs/load.gif";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchDoctor from "@/apis/Doctors/useFetchDoc";

export default function DoctorCard() {
  const { data, isLoading, isError } = fetchDoctor();
  if (isError) {
    return <div className="w-5/6 text-red-500">Error fetching data</div>;
  }

  const doctors = data?.data;

  return (
    <div className="grid grid-cols gap-6 md:grid-cols-4 lg:grid-cols-4 mb-8">
      {doctors &&
        doctors?.map((doctor) => (
          <Link
            key={doctor.details.doctor_id}
            to={`/doctor/${doctor.details.doctor_id}`}
          >
            <Card className="bg-gray-100 hover:bg-gray-50">
              <div>
                <img
                  className="h-48 w-full object-top object-cover"
                  src={doc} // You can add a fallback image here
                  alt="doctor_img"
                />
              </div>

              <CardContent className="p-4 py-2 flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <LuUserRound size="20" className="text-gray-400" />
                  <h2 className="font-bold my-auto">{doctor.user.name}</h2>
                </div>

                <div className="flex gap-2 items-center">
                  <LuMail size="20" className="text-gray-400" />
                  <p className="text-gray-400 my-auto text-sm">
                    {doctor.user.email}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <LuLightbulb size="20" className="text-gray-400" />
                  <p className="text-gray-400 my-auto text-sm">
                    {doctor.details.specialty}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
    </div>
  );
}
