import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/Auth/sign-up";
import Login from "./Pages/Auth/Login";
import AddAppointment from "./Pages/Appointment/AddAppointment";
import DoctorDetails from "./Pages/Doctors/DoctorDetails";
import Doctor from "./Pages/Doctors/Doctor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign_up" exact element={<SignUp />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/doctor" exact element={<Doctor />} />
          <Route path="/doctor/:id" exact element={<DoctorDetails />} />
          <Route
            path="/doctor/:id/appointment"
            exact
            element={<AddAppointment />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
