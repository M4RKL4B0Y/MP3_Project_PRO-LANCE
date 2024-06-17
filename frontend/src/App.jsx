import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./forms/RegistrationForm";
import NewProfile from "./forms/ProfileForm";
import ClientPage from "./users/client";
import "./App.css";
import Task from "./components/Tasks";
import Projects from "./components/Projects";
import Comments from "./components/Comments";
import Home from "./components/Home";
import Logout from "./components/Logout";
import RequestForm from "./forms/RequestForm";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-profile" element={<NewProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<ClientPage />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/newRequest" element={<RequestForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
