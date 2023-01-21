import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ContextUser } from "./Context/UserContext";
import Dashboard from "./Admin/Dashboard";
import GetAllUsers from "./Admin/GetAllUsers";
import GetAllDoctors from "./Admin/GetAllDoctors";

function App() {
  const user = useContext(ContextUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Pages */}
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

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
