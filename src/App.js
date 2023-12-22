import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";

function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="signUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
