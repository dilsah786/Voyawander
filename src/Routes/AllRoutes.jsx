import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/homepage/HomePage";
import ContactUs from "../Components/contact-us/ContactUs";
import Holidays from "../Holiday/HolidayPage/Holidays";
import HolidaySingleProduct from "../Holiday/HolidaySingleProductPage/HolidaySingleProduct";
import { Login } from "../Components/Login/Login";
import { Signup } from "../Components/Signup/Signup";
import Payment from "../Components/Payment/Payment"
import Hotel from "../Hotels/Hotel";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/contactus" element={<ContactUs />}></Route>
      <Route path="/hotel" element={<Hotel />}></Route>
      <Route path="/holidays" element={<Holidays />}></Route>
      <Route path="/singleproductpage" element={<HolidaySingleProduct />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
       <Route path="/Payment" element={<Payment />}></Route>
    </Routes>
  );
}

export default AllRoutes;
