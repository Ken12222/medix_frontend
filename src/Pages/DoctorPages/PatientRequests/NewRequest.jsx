import useFetchRequest from "@/apis/DoctorPatient/fetchRequests";
import { Button } from "@/components/ui/button";
import useApproveRequest from "../../../apis/DoctorPatient/useApproveRequest";
import useloggedInUser from "@/store/useLogin";
import { useState } from "react";
import useDeleteRequest from "@/apis/DoctorPatient/useDeleteRequest";

export default function NewRequest() {
  const { data, isSuccess, isError, error } = useFetchRequest();
  const newRequestData = data?.data;
  const user = useloggedInUser((state) => state.user);

  const {
    mutate: deleteRequest,
    data: deleteData,
    isSuccess: deleteSuccess,
    isError: deleteError,
  } = useDeleteRequest();

  const {
    mutate: approveRequest,
    data: approvalData,
    isSuccess: approveSuccess,
    isError: approveError,
  } = useApproveRequest();
  const [status, setStatus] = useState("approved");

  function handleApproval(patientID, doctorID) {
    //e.preventDefault();
    const ids = { patientID, doctorID };
    approveRequest({ ids, status });

    if (approveSuccess) {
      return <p className="text-green-400">You have approved Request</p>;
    }
  }

  function handleReject(patientID, doctorID) {
    setStatus("rejected");
    const ids = { patientID, doctorID };
    approveRequest({ ids, status });

    if (deleteSuccess) {
      return <p className="text-green-400">You have rejected the Request</p>;
    }
  }

  return (
    <section className="">
      <div className="flex items-center justify-between mt-4">
        {newRequestData && newRequestData.length > 0 ? (
          <>
            <p className="text-sm text-gray-400 ">New Requests</p>
            <a href="">See All</a>
          </>
        ) : (
          ""
        )}
      </div>
      {Array.isArray(newRequestData) && newRequestData.length > 0 ? (
        newRequestData.map((request) => (
          <div
            key={request.id}
            className="border-b border-gray-300 flex justify-between my-2 h-fit p-4"
          >
            <div className="flex gap-2">
              <img
                className="w-10 h-10 my-auto rounded-full bg-gray-400"
                src=""
                alt=""
              />
              <div>
                <p>{request.patient.user.name}</p>
                <p className="text-sm text-gray-400">Requests to add you!</p>
              </div>
            </div>

            {request.status === "pending" ? (
              <Button
                onClick={() =>
                  handleApproval(request.patient.id, user.doctor.id)
                }
              >
                Approve
              </Button>
            ) : (
              "Approved"
            )}

            <Button
              onClick={() => handleReject(request.patient.id, user.doctor.id)}
              className="bg-white text-red-400 my-auto"
            >
              Reject
            </Button>
          </div>
        ))
      ) : (
        <p>There are no requests yet</p>
      )}
    </section>
  );
}
