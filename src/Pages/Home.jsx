import SearchDoctor from "@/components/search-doctor";
import Hero from "../components/Hero";
import DoctorCard from "@/components/doctor-card";
import OurPerformance from "@/components/our-performance";
import OurServices from "@/components/our-services";
import Footer from "@/components/Footer";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useloggedInUser from "@/store/useLogin";

export default function Home() {
  // const [cookies, setCookie, removieCookie] = useCookies(["XSRF-TOKEN"]);
  const isUserAuthenticated = useloggedInUser(
    (state) => state.isUserAuthenticated
  );
  const redirect = useNavigate();
  useEffect(() => {
    if (isUserAuthenticated) {
      redirect("/patient");
    }
  }, [isUserAuthenticated, redirect]);
  const [doctors, setDoctors] = useState([]);
  return (
    <>
      <Hero />
      <SearchDoctor doctor={doctors} setDoctors={setDoctors} />
      <div className="w-5/6 mx-auto">
        <h4 className="font-bold text-2xl mt-8 mb-4">Top Doctors</h4>
        <DoctorCard doctors={doctors} setDoctors={setDoctors} />
      </div>
      <OurPerformance />
      <OurServices />
      <Footer />
    </>
  );
}
