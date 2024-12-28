import DoctorCard from "@/components/doctor-card";
import Footer from "@/components/Footer";
import SearchDoctor from "@/components/search-doctor";

export default function Doctors() {
  return (
    <>
      <section className="mx-auto py-2 my-20">
        <SearchDoctor />
        <DoctorCard />
      </section>
      <Footer />
    </>
  );
}
