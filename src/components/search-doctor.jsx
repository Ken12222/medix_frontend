import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "@/apis/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export default function SearchDoctor({ doctors, setDoctors }) {
  const [name, setName] = useState("");

  useEffect(() => {
    async function searchDoctor() {
      try {
        await axios.get("/sanctum/csrf-cookie");
        const res = await axios.get(`/api/doctor?query=${name}`);
        const data = res.data;
        setDoctors(data);
        //return data;
      } catch (error) {
        console.error(error);
      }
    }
    searchDoctor();
  }, [name]);

  return (
    <>
      <section className="w-5/6 mx-auto bg-gray-100 rounded-lg mb-4">
        <div className="p-8">
          <h4 className="font-bold pb-4">Find A Doctor</h4>
          <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-4">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" border-deep outline-0 col-span-2"
              placeholder="search doctor..."
            />

            <Button className="col-span-2 md:col-span-1">Search</Button>
          </div>
        </div>
      </section>
    </>
  );
}
