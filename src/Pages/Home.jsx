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
      <DoctorCard />
      <OurPerformance />
      <OurServices />
      <Footer />
    </>
  );
}
