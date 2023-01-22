import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Admin/Dashboard";
import GetAllUsers from "./Admin/GetAllUsers";
import GetAllDoctors from "./Admin/GetAllDoctors";
import ApplyDoctor from "./Doctor/ApplyDoctor";
import Profile from "./Pages/Profile";
import FindDoctor from "./Doctor/FindDoctor";
import Appointment from "./Doctor/Appointment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Pages */}
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

            {/* Doctor */}
            <Route path="/doctor/apply" element={<ApplyDoctor />} />
            <Route path="/doctor/find" element={<FindDoctor />} />
            <Route path="/doctor/appointment" element={<Appointment />} />

            {/* Admin */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/get-all-users" element={<GetAllUsers />} />
            <Route path="/admin/get-all-doctors" element={<GetAllDoctors />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
