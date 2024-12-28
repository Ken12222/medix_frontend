import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import dent from "../../imgs/dent.jpg";

export default function OurServices() {
  const [isLoading, setIsLoading] = useState(false);
  const services = [
    {
      id: 1,
      title: "Emergency Care",
      description:
        "24/7 emergency medical services for life-threatening injuries and conditions, including trauma care, heart attacks, strokes, and more.",
    },
    {
      id: 2,
      title: "General Surgery",
      description:
        "Comprehensive surgical services, including elective and emergency surgeries, for conditions requiring incision, repair, or removal of tissue.",
    },
    {
      id: 3,
      title: "Maternity Services",
      description:
        "Full maternity care including prenatal, labor, delivery, and postpartum services, along with specialized care for high-risk pregnancies.",
    },
  ];

  return (
    <div className="w-5/6 mx-auto">
      <div className="py-8">
        <h4 className="font-bold text-2xl text-deep text-center">
          Services we provide
        </h4>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan.
        </p>
      </div>

      <div className="grid grid-cols gap-6 md:grid-cols-3 lg:grid-cols-3 mb-8">
        {services.map((service) => (
          <Link key={service.id} className="py-2 cursor-pointer">
            <Card className=" bg-gray-100 hover:bg-gray-50 flex flex-col justify-between">
              <CardHeader>
                <img
                  className="h-48 w-full object-center object-cover rounded-lg"
                  src={dent}
                  alt="doctor_img"
                />
              </CardHeader>
              <CardContent className="p-o py-2">
                <h2 className="font-bold">{service.title}</h2>
                <div className="flex gap-2 align-middle">
                  <p className="text-gray-400 py-2">{service.description}</p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4">
                  <button>Learn More</button>
                  <LuArrowRight className="my-auto" />
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
