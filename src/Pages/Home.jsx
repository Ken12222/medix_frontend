import SearchDoctor from "@/components/search-doctor";
import Hero from "../components/Hero";
import DoctorCard from "@/components/doctor-card";
import OurPerformance from "@/components/our-performance";
import OurServices from "@/components/our-services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchDoctor />
      <div className="w-5/6 mx-auto">
        <h4 className="font-bold text-2xl mt-8 mb-4">Top Doctors</h4>
        <DoctorCard />
      </div>
      <OurPerformance />
      <OurServices />
      <Footer />
    </>
  );
}
