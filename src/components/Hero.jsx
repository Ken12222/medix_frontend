import doc from "../../imgs/doc.png";
import AppointmentButton from "./cta/appointmentBtn";

export default function Home() {
  return (
    <>
      <main className="w-5/6 py-8 mx-auto mt-12 grid grid-cols md:grid-cols-2 md:gap-8 gap-4">
        <div className="my-auto">
          <h1 className="font-bold text-2xl md:text-4xl lg:4xl my-4 md:my-12 lg:my-12">
            Providing Quality <span className="text-deep">Healthcare</span> for
            a<span className="text-light"> Brighter</span> and{" "}
            <span className="text-light">Healthy</span> Future
          </h1>
          <p>
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionals, cutting-edge technology, and compassionate
            approach make us a leader in the healthcare industry
          </p>
          <AppointmentButton />
        </div>

        <div className="hidden md:block lg:block">
          <img src={doc} alt="doctor_img" />
        </div>
      </main>
    </>
  );
}
