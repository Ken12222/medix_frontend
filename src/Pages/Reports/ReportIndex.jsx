import useFetchReport from "@/apis/Reports/useFetchReports";

export default function Reports() {
  const { data, isSuccess, isError, isLoading } = useFetchReport();
  const ReportData = data?.data;

  return (
    <main className="w-5/6 mx-auto my-24">
      {ReportData && ReportData.length > 0 ? (
        <div className="my-2">
          <div className="flex justify-between">
            <p className="text-sm text-gray-400">
              Reports from Recent Appointment
            </p>
          </div>
          {ReportData.map((report) => (
            <div key={report.id}>
              <p>{report.symptoms}</p>
              <p>{report.doc_report}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
