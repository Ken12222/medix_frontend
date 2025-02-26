import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import AddAppointment from "./Pages/Appointment/AddAppointment";
import DoctorDetails from "./Pages/MyDoctors/DoctorDetails";
import Doctor from "./Pages/MyDoctors/Doctor";
import useloggedInUser from "./store/useLogin";
import PatientDasboard from "./Pages/Patient/Dashboard";
import CompleteProfileSetup from "./Pages/Patient/completeProfileSetup";
import AppointmentDetails from "./Pages/Appointment/AppointmentDetails";
import UpdateProfileSetup from "./Pages/Patient/updateProfileSetup";
import AppointmentIndex from "./Pages/Appointment/AppointmentIndex";
import MyDoctorIndex from "./Pages/MyDoctors/MyDoctorIndex";
import UpdateAppointment from "./Pages/Appointment/UpdateAppointment";
import ReportIndex from "./Pages/Reports/ReportIndex";
import DoctorDashboard from "./Pages/DoctorPages/DoctorDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign_up" exact element={<SignUp />} />
          <Route path="/doctorlist" exact element={<Doctor />} />
          <Route path="/patient" exact element={<PatientDasboard />} />
          <Route
            path="/patient/:patientID/doctor"
            exact
            element={<MyDoctorIndex />}
          />
          <Route
            path="/doctor/:doctorID/patient/:patientID/report"
            exact
            element={<ReportIndex />}
          />
          <Route
            path="/patient/:patientID"
            exact
            element={<UpdateProfileSetup />}
          />
          <Route
            path="/patient/:patientID/appointment/:appointmentID"
            exact
            element={<AppointmentDetails />}
          />
          <Route
            path="/patient/:patientID/appointment"
            exact
            element={<AppointmentIndex />}
          />
          <Route
            path="doctor/:doctorID/appointment/:appointmentID"
            exact
            element={<UpdateAppointment />}
          />
          <Route
            path="/complete_profile"
            exact
            element={<CompleteProfileSetup />}
          />
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/doctor/:doctorID/appointment"
            exact
            element={<AddAppointment />}
          />
          <Route path="/login" exact element={<Login />} />

          <Route path="/doctor" exact element={<DoctorDashboard />} />
          <Route path="/doctor/:id" exact element={<DoctorDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
