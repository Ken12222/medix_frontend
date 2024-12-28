import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";

export default function AppointmentButton() {
  const { id } = useParams();
  return (
    <>
      <Link to={`/doctor/${id}/appointment`}>
        <Button className="my-4">Book Appointments</Button>
      </Link>
    </>
  );
}
