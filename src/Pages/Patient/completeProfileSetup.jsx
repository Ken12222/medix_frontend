import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import useVerifyPatient from "@/apis/Patients/useVerifyPatients.jsx";

export default function CompleteProfileSetup() {
  const [patientProfileData, setPatientProfileData] = useState({
    contact: "",
    insurance_card: "",
    insurance_card_id: "",
    current_medication: "",
    emergency_contact: "",
  });
  const {
    data,
    mutate: handleVerifyProfile,
    isSuccess,
    isError,
  } = useVerifyPatient();

  function handleCompletePatientProfile(e) {
    e.preventDefault();

    handleVerifyProfile(patientProfileData);
    setPatientProfileData({
      contact: "",
      insurance_card: "",
      insurance_card_id: "",
      current_medication: "",
      emergency_contact: "",
    });
  }

  return (
    <main className="w-5/6 mx-auto my-28">
      <h2 className="my-2 text-xl font-bold">Complete Your Profile Setup</h2>
      <form onSubmit={handleCompletePatientProfile}>
        <div className="my-2">
          <Label className="text-base">Contact</Label>
          <Input
            name="contact"
            type="tel"
            value={patientProfileData.contact}
            onChange={(e) =>
              setPatientProfileData({
                ...patientProfileData,
                contact: e.target.value,
              })
            }
            placeholder="Enter Phone. (+23312 345 6789)"
          />
        </div>

        <div className="my-2">
          <Label className="text-base">Insurance ID</Label>
          <Input
            type="text"
            name="insurance_card"
            value={patientProfileData.insurance_card}
            onChange={(e) =>
              setPatientProfileData({
                ...patientProfileData,
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
            value={patientProfileData.insurance_card_id}
            onChange={(e) =>
              setPatientProfileData({
                ...patientProfileData,
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
            value={patientProfileData.current_medication}
            onChange={(e) =>
              setPatientProfileData({
                ...patientProfileData,
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
            value={patientProfileData.emergency_contact}
            onChange={(e) =>
              setPatientProfileData({
                ...patientProfileData,
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
