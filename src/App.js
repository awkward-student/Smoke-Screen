// import logo from './logo.svg';
import "./App.css";
import AdminRouteHandler from "./components/AdminRouteHandler";
import UserRouteHandller from "./components/UserRouteHandller";
import AdminDashboard from "./pages/admin/adm-dashboard";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserRouteHandller />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/admin" element={<AdminRouteHandler />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
