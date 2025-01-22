import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useloggedInUser from "@/store/useLogin";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useUpdatePatientProfile from "@/apis/Patients/useUpdateVerifyPatient";
import { useParams } from "react-router-dom";

export default function UpdateProfileSetup() {
  const setUser = useloggedInUser((state) => state.setUser);
  const {
    mutate: updateProfile,
    data,
    isError,
    isSuccess,
    error,
  } = useUpdatePatientProfile();
  const [updateData, setUpdateData] = useState({
    contact: "",
    insurance_card: "",
    insurance_card_id: "",
    current_medication: "",
    emergency_contact: "",
  });
  const patientID = useParams();
  const redirect = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["XSRF-TOKEN"]);
  data ? console.log(data?.patient) : "";

  //doesn't work as expectd. fix it
  useEffect(() => {
    if (!cookies["XSRF-TOKEN"]) {
      redirect("/");
    }

    if (isSuccess) {
      setUpdateData({
        contact: "",
        insurance_card: "",
        insurance_card_id: "",
        current_medication: "",
        emergency_contact: "",
      });
      redirect("/patient");
      setUser(data?.patient);
    }
    if (isError) {
      console.log(error);
    }
  }, [cookies, isSuccess, isError, error]);

  function handleProfileUpdate(e) {
    e.preventDefault();
    updateProfile({ patientID, updateData });
  }

  return (
    <main className="w-5/6 mx-auto mt-24">
      <h2 className="my-2 text-xl font-bold">Update Your Profile Setup</h2>
      <form onSubmit={handleProfileUpdate}>
        <div className="my-2">
          <Label className="text-base">Contact</Label>
          <Input
            name="contact"
            type="tel"
            value={updateData.contact}
            onChange={(e) =>
              setUpdateData({
                ...updateData,
                contact: e.target.value,
              })
            }
            placeholder=""
          />
        </div>

        <div className="my-2">
          <Label className="text-base">Insurance ID</Label>
          <Input
            type="text"
            name="insurance_card"
            value={updateData.insurance_card}
            onChange={(e) =>
              setUpdateData({
                ...updateData,
                insurance_card: e.target.value,
              })
            }
            placeholder="NHIS"
          />
        </div>
        <div className="my-2">
          <Label className="text-base">Insurance ID No.</Label>
          <Input
            type="text"
            name="insurance_card_id"
            value={updateData.insurance_card_id}
            onChange={(e) =>
              setUpdateData({
                ...updateData,
                insurance_card_id: e.target.value,
              })
            }
            placeholder="Enter ID No.(123456789)"
          />
        </div>
        <div className="my-2">
          <Label className="text-base">Medication</Label>
          <Input
            type="text"
            name="current_medication"
            value={updateData.current_medication}
            onChange={(e) =>
              setUpdateData({
                ...updateData,
                current_medication: e.target.value,
              })
            }
            placeholder="Enter medication. (paracetamol)"
          />
        </div>
        <div className="my-2">
          <Label className="text-base">Emergency Contact</Label>
          <Input
            name="emergency_contact"
            type="tel"
            value={updateData.emergency_contact}
            onChange={(e) =>
              setUpdateData({
                ...updateData,
                emergency_contact: e.target.value,
              })
            }
            placeholder="Enter Emergency Contact. (+23312 345 6789)"
          />
        </div>
        <Button className="w-full my-2">Submit</Button>
      </form>
    </main>
  );
}
