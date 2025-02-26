import DoctorCard from "@/components/doctor-card";
import Footer from "@/components/Footer";
import SearchDoctor from "@/components/search-doctor";
import { useState } from "react";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  return (
    <>
      <section className="mx-auto py-2 my-20">
        <SearchDoctor doctors={doctors} setDoctors={setDoctors} />
        <DoctorCard doctors={doctors} setDoctors={setDoctors} />
      </section>
      <Footer />
    </>
  );
}
