import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./PAGES/LoginPage";
import Dashboard from "./PAGES/Dashboard";
import Loading from "./PAGES/Loading"
import Search from "./PAGES/Search";

export default function App() {
  return (
    <>
      <Loading>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<Search/>}/>
          </Routes>
        </BrowserRouter>
      </Loading>
    </>
  );
}
