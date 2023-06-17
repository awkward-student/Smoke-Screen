// import logo from './logo.svg';
import "./App.css";
import AdminDashboard from "./pages/admin/adm-dashboard";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* <Route path="/user" element={<PrivateRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile-info/:userId" element={<ProfileInfo />} />
          <Route path="update-blog/:blogId" element={<UpdateBlog />} />
        </Route>

        <Route path="/admin" element={<PrivateRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile-info/:userId" element={<ProfileInfo />} />
          <Route path="update-blog/:blogId" element={<UpdateBlog />} />
        </Route> */}
      </Routes>
      {/* <Dashboard /> */}
      {/* <Login/> */}
      {/* <Register/> */}
    </BrowserRouter>
  );
}

export default App;
