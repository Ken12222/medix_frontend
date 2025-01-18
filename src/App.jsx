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
import DoctorDetails from "./Pages/Doctors/DoctorDetails";
import Doctor from "./Pages/Doctors/Doctor";
import useloggedInUser from "./store/useLogin";
import PatientDasboard from "./Pages/Patient/Dashboard";
import CompleteProfileSetup from "./Pages/Patient/completeProfileSetup";
import AppointmentDetails from "./Pages/Appointment/AppointmentDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign_up" exact element={<SignUp />} />
          <Route path="/doctor" exact element={<Doctor />} />
          <Route path="/doctor/:id" exact element={<DoctorDetails />} />
          <Route path="/patient" exact element={<PatientDasboard />} />
          <Route
            path="/patient/:patientID/appointment/:appointmentID"
            exact
            element={<AppointmentDetails />}
          />
          <Route
            path="/complete_profile"
            exact
            element={<CompleteProfileSetup />}
          />
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/doctor/:id/appointment"
            exact
            element={<AddAppointment />}
          />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
